import { serve } from "https://deno.land/std@0.131.0/http/server.ts";

import { createClient } from "https://esm.sh/@supabase/supabase-js@^1.33.2";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_ANON_KEY") ?? ""
);

serve(async (req) => {
  const { to, tokenId, community_id } = await req.json();

  await supabase.from("members").upsert({
    id: to.toLowerCase(),
    address: to.toLowerCase(),
  });

  await supabase.from("member_communities").upsert({
    token_id: tokenId,
    member_id: to.toLowerCase(),
    community_id: community_id,
  });

  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
  });
});
