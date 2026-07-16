async function createBoard(prisma, boardName) {
  const board = await prisma.board.create({
    data: {
      name: boardName,
    },
  });
  return board;
}

async function createClasses(prisma, board, classes) {
  for (const classData of classes) {
    const academicClass = await prisma.academicClass.create({
      data: {
        board_id: board.id,
        name: classData.name,
      },
    });

    await createSubjects(prisma, academicClass, classData.subjects);
  }
}

async function createSubjects(prisma, academicClass, subjects) {
  for (const subjectData of subjects) {
    const subject = await prisma.subject.create({
      data: {
        academicClass_id: academicClass.id,
        name: subjectData.name,
      },
    });

    await createBook(prisma, subject, subjectData.books);
  }
}

async function createBook(prisma, subject, books) {
  for (const bookData of books) {
    const book = await prisma.book.create({
      data: {
        subject_id: subject.id,
        name: bookData.name,
      },
    });

    await createChapters(prisma, book, bookData.chapters);
  }
}

async function createChapters(prisma, book, chapters) {
  for (const chapterData of chapters) {
    await prisma.chapter.create({
      data: {
        book_id: book.id,
        name: chapterData.name,
        chapter_order: chapterData.chapter_order,
      },
    });
  }
}

export async function seedCatalog(prisma, catalog) {
  const board = await createBoard(prisma, catalog.board);
  await createClasses(prisma, board, catalog.classes);
}
