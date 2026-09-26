// Paste your Supabase details here (Supabase > Project Settings > API).
// The "anon public" key is SAFE to put here. NEVER put the "service_role" key here.
const SUPABASE_URL = 'sb_publishable_k_ovaCstJacVp3SS8VkHcg_O9dL9ygg';
const SUPABASE_ANON_KEY = 'sb_secret_LyV7bg903UJ1rtTg6oSm0A_qyE18oFR';
const db = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
