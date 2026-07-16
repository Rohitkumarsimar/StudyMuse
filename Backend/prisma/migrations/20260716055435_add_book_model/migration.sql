/*
  Warnings:

  - You are about to drop the column `subject_id` on the `chapter` table. All the data in the column will be lost.
  - You are about to drop the column `syllabus_order` on the `chapter` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[book_id,name]` on the table `chapter` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[book_id,chapter_order]` on the table `chapter` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `book_id` to the `chapter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `chapter_order` to the `chapter` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "chapter" DROP CONSTRAINT "chapter_subject_id_fkey";

-- DropIndex
DROP INDEX "chapter_subject_id_name_key";

-- DropIndex
DROP INDEX "chapter_subject_id_syllabus_order_key";

-- AlterTable
ALTER TABLE "chapter" DROP COLUMN "subject_id",
DROP COLUMN "syllabus_order",
ADD COLUMN     "book_id" UUID NOT NULL,
ADD COLUMN     "chapter_order" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "book" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "subject_id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NOT NULL,

    CONSTRAINT "book_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "book_subject_id_name_key" ON "book"("subject_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "chapter_book_id_name_key" ON "chapter"("book_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "chapter_book_id_chapter_order_key" ON "chapter"("book_id", "chapter_order");

-- AddForeignKey
ALTER TABLE "book" ADD CONSTRAINT "book_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chapter" ADD CONSTRAINT "chapter_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "book"("id") ON DELETE CASCADE ON UPDATE CASCADE;
