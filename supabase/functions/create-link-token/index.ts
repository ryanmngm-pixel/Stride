import { serve } from "https://deno.land/std/http/server.ts";
import {
  Configuration,
  PlaidApi,
  PlaidEnvironments,
} from "npm:plaid";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": Deno.env.get("PLAID_CLIENT_ID")!,
      "PLAID-SECRET": Deno.env.get("PLAID_SECRET")!,
    },
  },
});

const client = new PlaidApi(configuration);

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: corsHeaders,
    });
  }

  try {
    const response = await client.linkTokenCreate({
      user: {
        client_user_id: crypto.randomUUID(),
      },
      client_name: "Stride",
      language: "en",
      country_codes: ["US"],
      products: ["transactions"],
    });

    return new Response(
      JSON.stringify({
        link_token: response.data.link_token,
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({
        error: error.message,
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});