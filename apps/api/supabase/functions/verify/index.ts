import { serve } from "https://deno.land/std@0.131.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@^1.33.2";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_ANON_KEY") ?? ""
);

serve(async (req: Request) => {
  const { walletAddress, contractAddress } = await req.json();

  const communityData = await supabase
    .from("contracts")
    .select("community_id")
    .eq("id", contractAddress)
    .limit(1);

  if (!communityData) {
    return new Response(JSON.stringify({ success: false }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  //TODO: this should become a single sql query to check that in the joinction table the user owns an NFT.

  const { data } = await supabase
    .from("member_communities")
    .select("*")
    .eq("member_id", walletAddress)
    .limit(1);

  if (!data || data.length === 0) {
    return new Response(JSON.stringify({ success: false }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
  });
});
