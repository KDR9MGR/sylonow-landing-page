import { supabase } from './supabase';

class VisitorTracker {
  private static instance: VisitorTracker;
  private isTracking: boolean = false;

  private constructor() {}

  public static getInstance(): VisitorTracker {
    if (!VisitorTracker.instance) {
      VisitorTracker.instance = new VisitorTracker();
    }
    return VisitorTracker.instance;
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

  public async trackVisit() {
    if (this.isTracking) {
      return;
    }

    try {
      this.isTracking = true;
      const ipAddress = await this.getVisitorIp();
      
      if (!ipAddress) {
        console.error('Could not track visit: IP address not available');
        return;
      }

      // Try to insert the IP address
      const { error } = await supabase
        .from('visit_count')
        .insert([{ ip_address: ipAddress }])
        .select();

      if (error) {
        // If error is due to unique constraint, that's fine - it means this IP has visited before
        if (!error.message.includes('unique constraint')) {
          console.error('Error tracking visitor:', error);
        }
      } else {
        console.log('New visitor tracked successfully');
      }
    } catch (error) {
      console.error('Error in trackVisit:', error);
    } finally {
      this.isTracking = false;
    }
  }
}

// Export a singleton instance
export const visitorTracker = VisitorTracker.getInstance(); 