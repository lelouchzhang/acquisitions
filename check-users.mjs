import { db } from './src/config/database.js';
import { sql } from 'drizzle-orm';

const result = await db.execute(
  sql`SELECT to_regclass('public.users') AS table_exists`
);
console.log(
  'users 表存在？',
  result[0].table_exists !== null ? '✅ 存在' : '❌ 不存在'
);
process.exit(0);
