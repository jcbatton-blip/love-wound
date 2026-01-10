import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import { testimonials } from './drizzle/schema.ts';
import fs from 'fs';

const testimonialsData = JSON.parse(fs.readFileSync('./testimonials_data.json', 'utf-8'));

const connection = await mysql.createConnection(process.env.DATABASE_URL);
const db = drizzle(connection);

for (const testimonial of testimonialsData) {
  await db.insert(testimonials).values({
    name: testimonial.name,
    initial: testimonial.initial,
    date: testimonial.date,
    title: testimonial.title,
    text: testimonial.text,
    featured: testimonial.featured ? 1 : 0,
    displayOrder: testimonial.id,
    category: testimonial.category || null,
  });
}

console.log(`✅ Seeded ${testimonialsData.length} testimonials`);
await connection.end();
