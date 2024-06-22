import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

const client = createClient({
  url: process.env.NEXT_PUBLIC_DATABASE_URL!,
  authToken: process.env.NEXT_PUBLIC_DATABASE_AUTH_TOKEN!,
});

export const db = drizzle(client);
