import { includes } from "zod";
import { prisma } from "../config/prisma.js";

export async function academicCatalogQuery() {
  const result = await prisma.board.findMany({
    include: {
      academicClasses: {
        include: {
          subjects: {
            include: {
              books: {
                include: { chapters: true },
              },
            },
          },
        },
      },
    },
  });

  return result;
}
