import { supabase } from './supabase';

class VisitorTracker {
  private static instance: VisitorTracker;
  private isTracking: boolean = false;
  private readonly VISIT_COUNT_ID = 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11';
  private readonly SESSION_STORAGE_KEY = 'visitor_session_id';

  private constructor() {}

  public static getInstance(): VisitorTracker {
    if (!VisitorTracker.instance) {
      VisitorTracker.instance = new VisitorTracker();
    }
    return VisitorTracker.instance;
  }

  private generateSessionId(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }

  private getOrCreateSessionId(): string {
    let sessionId = sessionStorage.getItem(this.SESSION_STORAGE_KEY);
    if (!sessionId) {
      sessionId = this.generateSessionId();
      sessionStorage.setItem(this.SESSION_STORAGE_KEY, sessionId);
    }
    return sessionId;
  }

  private async getVisitorIp(): Promise<string> {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error('Failed to get IP address:', error);
      return '';
    }
  }

  private async checkRecentVisit(ipAddress: string, sessionId: string): Promise<boolean> {
    try {
      const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
      
      // Check for visits in the last 24 hours with the same IP or session ID
      const { data, error } = await supabase
        .from('visitor_stats')
        .select('id')
        .gte('created_at', twentyFourHoursAgo)
        .or(`ip_address.eq.${ipAddress},session_id.eq.${sessionId}`)
        .limit(1);

      if (error) {
        console.error('Error checking recent visits:', error);
        return false;
      }

      return data && data.length > 0;
    } catch (error) {
      console.error('Error in checkRecentVisit:', error);
      return false;
    }
  }

  private async incrementVisitCount(): Promise<void> {
    try {
      const { error: updateError } = await supabase
        .rpc('increment_visit_count_direct', {
          count_id: this.VISIT_COUNT_ID
        });

      if (updateError) {
        throw new Error(`Failed to update count: ${updateError.message}`);
      }

      console.log('Visit count incremented successfully');
    } catch (error) {
      console.error('Error incrementing visit count:', error);
      throw error;
    }
  }

  public async trackVisit() {
    if (this.isTracking) {
      return;
    }

    this.isTracking = true;
    console.log('Starting visit tracking...');

    try {
      const ipAddress = await this.getVisitorIp();
      if (!ipAddress) {
        throw new Error('Could not get IP address');
      }

      const sessionId = this.getOrCreateSessionId();
      
      // Check if this IP or session has visited recently
      const hasRecentVisit = await this.checkRecentVisit(ipAddress, sessionId);
      
      if (hasRecentVisit) {
        console.log('Recent visit found, skipping tracking');
        return;
      }

      // First try to increment the count
      await this.incrementVisitCount();

      // Then record the visit
      const { error: visitError } = await supabase
        .from('visitor_stats')
        .insert([{
          ip_address: ipAddress,
          user_agent: navigator.userAgent,
          referrer: document.referrer || null,
          pathname: window.location.pathname,
          session_id: sessionId
        }]);

      if (visitError) {
        throw new Error(`Failed to record visit: ${visitError.message}`);
      }

      console.log('Visit recorded successfully');
    } catch (error) {
      console.error('Error in trackVisit:', error);
    } finally {
      this.isTracking = false;
    }
  }

  public async getVisitorCount(): Promise<number> {
    try {
      const { data, error } = await supabase
        .from('visit_count')
        .select('total_count')
        .eq('id', this.VISIT_COUNT_ID)
        .single();

      if (error) {
        throw new Error(`Failed to fetch visitor count: ${error.message}`);
      }

      return data?.total_count || 0;
    } catch (error) {
      console.error('Error in getVisitorCount:', error);
      return 0;
    }
  }
}

// Export singleton instance
export const visitorTracker = VisitorTracker.getInstance(); 