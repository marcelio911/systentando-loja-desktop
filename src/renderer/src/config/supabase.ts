// src/config/supabase.ts
import { createClient } from '@supabase/supabase-js'

// Substitua pelos seus dados reais do Superbase
const supabaseUrl = 'https://YOUR_SUPABASE_URL.supabase.co'
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
