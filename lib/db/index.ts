import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from './schema';

// Use 'sqlite.db' as default if not specified
const dbPath = process.env.DATABASE_URL?.replace('file:', '') || 'sqlite.db';
const sqlite = new Database(dbPath);

export const db = drizzle(sqlite, { schema });
