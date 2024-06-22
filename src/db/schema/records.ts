import { sql } from "drizzle-orm";
import { text, sqliteTable } from "drizzle-orm/sqlite-core";

export const records = sqliteTable("records", {
  id: text("id").notNull().primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  createdAt: text("createdAt")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: text("updatedAt"),
  createdBy: text("createdBy"),
});
