import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://fzrlkjnevnsipuramdyf.supabase.co";

const supabaseKey =
  "sb_publishable_YWKF8dzyAcScSXti8TkUxA_WGgkbG_L";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);