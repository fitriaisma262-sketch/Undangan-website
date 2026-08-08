const SUPABASE_URL = "https://yacmjyomakfdkmxeihbb.supabase.co";

const SUPABASE_KEY = "sb_publishable_T67eRn0MhIBTZxOv07gyRA_e9kiK_Wo";

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
