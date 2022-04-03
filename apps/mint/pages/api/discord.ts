import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../lib/supabase";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await supabase.functions.invoke("discord", {
    body: req.body,
  });
  res.status(200);
}
