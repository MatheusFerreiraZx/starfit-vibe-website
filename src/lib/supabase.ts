
import { createClient } from '@supabase/supabase-js';

// Get environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a wrapper function to get the client
export function getSupabaseClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Missing Supabase environment variables. Please add them in your Lovable project settings.');
    return null;
  }
  
  return createClient(supabaseUrl, supabaseAnonKey);
}

// Export a singleton instance
export const supabase = getSupabaseClient();
