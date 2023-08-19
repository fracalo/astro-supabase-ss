import { createClient } from "@supabase/supabase-js";

import { supabaseUrl, supabaseAnonKey} from './config'

// to be used on client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
