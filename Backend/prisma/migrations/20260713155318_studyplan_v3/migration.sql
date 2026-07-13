/*
  Warnings:

  - You are about to drop the column `subject` on the `tasks` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `tasks` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[studyPlan_id]` on the table `conversations` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `studyPlan_id` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Plan_type" AS ENUM ('ACADEMIC', 'CUSTOM');

-- DropForeignKey
ALTER TABLE "tasks" DROP CONSTRAINT "tasks_user_id_fkey";

-- DropIndex
DROP INDEX "idx_tasks_user_id";

-- AlterTable
ALTER TABLE "conversations" ADD COLUMN     "studyPlan_id" UUID;

-- AlterTable
ALTER TABLE "tasks" DROP COLUMN "subject",
DROP COLUMN "user_id",
ADD COLUMN     "studyPlan_id" UUID NOT NULL,
ALTER COLUMN "due_date" DROP NOT NULL;

-- CreateTable
CREATE TABLE "board" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NOT NULL,

    CONSTRAINT "board_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "academicClass" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "board_id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NOT NULL,

    CONSTRAINT "academicClass_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subject" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "academicClass_id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NOT NULL,

    CONSTRAINT "subject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chapter" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "subject_id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "syllabus_order" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NOT NULL,

    CONSTRAINT "chapter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "studyPlan" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "studyPlan_type" "Plan_type" NOT NULL,
    "chapter_id" UUID,
    "title" VARCHAR(255),
    "description" VARCHAR(500),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NOT NULL,
    "completed_at" TIMESTAMPTZ(6),

    CONSTRAINT "studyPlan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "board_name_key" ON "board"("name");

-- CreateIndex
CREATE UNIQUE INDEX "academicClass_board_id_name_key" ON "academicClass"("board_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "subject_academicClass_id_name_key" ON "subject"("academicClass_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "chapter_subject_id_name_key" ON "chapter"("subject_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "chapter_subject_id_syllabus_order_key" ON "chapter"("subject_id", "syllabus_order");

-- CreateIndex
CREATE INDEX "studyPlan_chapter_id_idx" ON "studyPlan"("chapter_id");

-- CreateIndex
CREATE INDEX "studyPlan_user_id_idx" ON "studyPlan"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "conversations_studyPlan_id_key" ON "conversations"("studyPlan_id");

-- CreateIndex
CREATE INDEX "tasks_studyPlan_id_idx" ON "tasks"("studyPlan_id");

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_studyPlan_id_fkey" FOREIGN KEY ("studyPlan_id") REFERENCES "studyPlan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "conversations" ADD CONSTRAINT "conversations_studyPlan_id_fkey" FOREIGN KEY ("studyPlan_id") REFERENCES "studyPlan"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "academicClass" ADD CONSTRAINT "academicClass_board_id_fkey" FOREIGN KEY ("board_id") REFERENCES "board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subject" ADD CONSTRAINT "subject_academicClass_id_fkey" FOREIGN KEY ("academicClass_id") REFERENCES "academicClass"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chapter" ADD CONSTRAINT "chapter_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studyPlan" ADD CONSTRAINT "studyPlan_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studyPlan" ADD CONSTRAINT "studyPlan_chapter_id_fkey" FOREIGN KEY ("chapter_id") REFERENCES "chapter"("id") ON DELETE CASCADE ON UPDATE CASCADE;
