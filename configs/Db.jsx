import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.NEXT_PUBLIC_DB_CONNECTION_STRING);
export const db = drizzle(sql);