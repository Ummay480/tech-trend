import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-01-01", // Ensure the correct API version
  useCdn: true, // Use `true` for faster reads but stale data
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN, // Token for authenticated requests
});
