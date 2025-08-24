"use server";
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema/index';

import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' })

export async function getData() {
    const sql = neon(process.env.DATABASE_URL!);
    const db = drizzle(sql, { schema })
    return db;
}