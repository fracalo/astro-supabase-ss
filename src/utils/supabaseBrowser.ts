import { createClient } from "@supabase/supabase-js"
import { supabaseUrl, supabaseAnonKey } from "./config"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
