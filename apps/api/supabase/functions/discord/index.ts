import { serve } from "https://deno.land/std@0.131.0/http/server.ts";

import { createClient } from "https://esm.sh/@supabase/supabase-js@^1.33.2";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_ANON_KEY") ?? ""
);

serve(async (req) => {
  const { address, discord } = await req.json();

  await supabase.from("members").upsert({
    id: address.toLowerCase(),
    address,
    discord,
  });

  return new Response(JSON.stringify({ success: true, address, discord }), {
    headers: { "Content-Type": "application/json" },
  });
});
