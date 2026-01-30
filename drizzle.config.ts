import { config } from 'dotenv';

config({ path: '.env.local' });
import type { Config } from 'drizzle-kit';

export default {
    schema: './lib/db/schema.ts',
    out: './drizzle',
    dialect: 'sqlite',
    dbCredentials: {
        url: process.env.DATABASE_URL || 'file:sqlite.db',
    },
} satisfies Config;
