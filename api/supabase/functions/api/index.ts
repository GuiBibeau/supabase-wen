import { serve } from "https://deno.land/std@0.131.0/http/server.ts";

console.log("Hello from Functions!");

serve(async () => {
  const data = {
    message: `Hello world!`,
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
});
