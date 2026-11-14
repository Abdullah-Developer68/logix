import "server-only";
import { drizzle, type PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres, { type Sql } from "postgres";
import * as schema from "./schema";

export type Database = PostgresJsDatabase<typeof schema>;

const globalForDb = globalThis as typeof globalThis & {
  __logixPgClient?: Sql;
  __logixDrizzleDb?: Database;
};

export function getDb(): Database | null {
  const databaseUrl = process.env.DATABASE_URL?.trim();
  if (!databaseUrl) {
    return null;
  }

  if (!globalForDb.__logixPgClient) {
    globalForDb.__logixPgClient = postgres(databaseUrl, {
      prepare: false,
      max: 1,
      idle_timeout: 20,
      connect_timeout: 10,
      // Supabase's transaction pooler hangs on pipelined parameterized
      // queries, so send one query at a time on the connection.
      max_pipeline: 1,
    });
  }

  if (!globalForDb.__logixDrizzleDb) {
    globalForDb.__logixDrizzleDb = drizzle(globalForDb.__logixPgClient, { schema });
  }

  return globalForDb.__logixDrizzleDb;
}
