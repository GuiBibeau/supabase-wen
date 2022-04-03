import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";

config();

const { SUPABASE_URL = "", SUPABASE_ANON_KEY = "" } = process.env;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
