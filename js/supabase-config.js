// Paste your Supabase details here (Supabase > Project Settings > API).
// The "anon public" key is SAFE to put here. NEVER put the "service_role" key here.
const SUPABASE_URL = 'https://hnarlvfazpmnjcsiweTF.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_62sC2p2nQ1b6lPh2BvxsbA_3ySDDzNq';
const db = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
