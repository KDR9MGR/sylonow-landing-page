import { supabase } from './supabase';
import { v4 as uuidv4 } from 'uuid';

class UserPresenceTracker {
  private sessionId: string;
  private heartbeatInterval: NodeJS.Timeout | null = null;
  private cleanupFunction: (() => void) | null = null;
  private isTracking: boolean = false;

  constructor() {
    this.sessionId = uuidv4();
    console.log('UserPresenceTracker initialized with session ID:', this.sessionId);
  }

  private async verifySupabaseConnection() {
    try {
      console.log('Verifying Supabase connection...');
      const { data, error } = await supabase.from('active_users').select('count').limit(1);
      
      if (error) {
        console.error('Supabase connection error:', error);
        return false;
      }
      
      console.log('Supabase connection verified successfully');
      return true;
    } catch (error) {
      console.error('Failed to verify Supabase connection:', error);
      return false;
    }
  }

  async startTracking() {
    console.log('startTracking called');
    
    if (this.isTracking) {
      console.log('Already tracking user presence');
      return;
    }

    // Verify connection first
    const isConnected = await this.verifySupabaseConnection();
    if (!isConnected) {
      console.error('Cannot start tracking - Supabase connection failed');
      return;
    }

    try {
      console.log('Starting user presence tracking...');
      
      // Register the user as active
      const { error: upsertError } = await supabase
        .from('active_users')
        .upsert(
          { 
            session_id: this.sessionId,
            last_seen: new Date().toISOString()
          },
          { onConflict: 'session_id' }
        );

      if (upsertError) {
        throw new Error(`Failed to register user: ${upsertError.message}`);
      }

      console.log('User registered successfully');

      // Set up heartbeat to update last_seen
      this.heartbeatInterval = setInterval(async () => {
        try {
          console.log('Sending heartbeat...');
          const { error: updateError } = await supabase
            .from('active_users')
            .update({ last_seen: new Date().toISOString() })
            .eq('session_id', this.sessionId);

          if (updateError) {
            console.error('Heartbeat update failed:', updateError);
          } else {
            console.log('Heartbeat update successful');
          }
        } catch (error) {
          console.error('Heartbeat error:', error);
        }
      }, 30000); // Update every 30 seconds

      // Set up cleanup on page unload
      const cleanup = async () => {
        try {
          if (this.sessionId) {
            console.log('Cleaning up user session...');
            const { error: deleteError } = await supabase
              .from('active_users')
              .delete()
              .eq('session_id', this.sessionId);

            if (deleteError) {
              console.error('Cleanup failed:', deleteError);
            } else {
              console.log('Cleanup successful');
            }
          }
        } catch (error) {
          console.error('Cleanup error:', error);
        }
      };

      window.addEventListener('beforeunload', cleanup);
      this.cleanupFunction = cleanup;
      this.isTracking = true;

      // Verify the user was added
      const { data, error: verifyError } = await supabase
        .from('active_users')
        .select('session_id')
        .eq('session_id', this.sessionId)
        .single();

      if (verifyError || !data) {
        console.error('Failed to verify user registration:', verifyError);
      } else {
        console.log('User presence verified in database');
      }

    } catch (error) {
      console.error('Error in startTracking:', error);
      // Try to clean up if something went wrong
      await this.stopTracking();
    }
  }

  async stopTracking() {
    console.log('stopTracking called');
    try {
      if (this.heartbeatInterval) {
        clearInterval(this.heartbeatInterval);
        this.heartbeatInterval = null;
        console.log('Heartbeat interval cleared');
      }

      if (this.cleanupFunction) {
        window.removeEventListener('beforeunload', this.cleanupFunction);
        await this.cleanupFunction();
        this.cleanupFunction = null;
        console.log('Cleanup completed');
      }

      this.isTracking = false;
      console.log('Stopped tracking user presence');
    } catch (error) {
      console.error('Error in stopTracking:', error);
    }
  }
}

// Create and export a single instance
export const userPresence = new UserPresenceTracker(); 