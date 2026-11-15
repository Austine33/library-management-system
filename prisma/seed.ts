import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Clear old data so you can re-run the seed safely
  await prisma.book.deleteMany();
  await prisma.genre.deleteMany();

  const fiction = await prisma.genre.create({ data: { name: 'Fiction' } });
  const science = await prisma.genre.create({ data: { name: 'Science' } });
  const history = await prisma.genre.create({ data: { name: 'History' } });
  const tech = await prisma.genre.create({ data: { name: 'Technology' } });

  await prisma.book.createMany({
    data: [
      // Fiction
      { title: 'Things Fall Apart', author: 'Chinua Achebe', publishedYear: 1958, genreId: fiction.id },
      { title: 'Weep Not, Child', author: 'Ngũgĩ wa Thiong\'o', publishedYear: 1964, genreId: fiction.id },
      { title: 'Half of a Yellow Sun', author: 'Chimamanda Ngozi Adichie', publishedYear: 2006, genreId: fiction.id },
      { title: 'The Alchemist', author: 'Paulo Coelho', publishedYear: 1988, genreId: fiction.id },
      // Science
      { title: 'A Brief History of Time', author: 'Stephen Hawking', publishedYear: 1988, genreId: science.id },
      { title: 'The Selfish Gene', author: 'Richard Dawkins', publishedYear: 1976, genreId: science.id },
      { title: 'Cosmos', author: 'Carl Sagan', publishedYear: 1980, genreId: science.id },
      { title: 'The Gene', author: 'Siddhartha Mukherjee', publishedYear: 2016, genreId: science.id },
      // History
      { title: 'Sapiens', author: 'Yuval Noah Harari', publishedYear: 2011, genreId: history.id },
      { title: 'Guns, Germs, and Steel', author: 'Jared Diamond', publishedYear: 1997, genreId: history.id },
      { title: 'Long Walk to Freedom', author: 'Nelson Mandela', publishedYear: 1994, genreId: history.id },
      { title: 'The Fate of Africa', author: 'Martin Meredith', publishedYear: 2005, genreId: history.id },
      // Technology
      { title: 'Clean Code', author: 'Robert C. Martin', publishedYear: 2008, genreId: tech.id },
      { title: 'The Pragmatic Programmer', author: 'Andrew Hunt', publishedYear: 1999, genreId: tech.id },
      { title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', publishedYear: 2017, genreId: tech.id },
      { title: 'You Don\'t Know JS', author: 'Kyle Simpson', publishedYear: 2015, genreId: tech.id },
    ],
  });

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });