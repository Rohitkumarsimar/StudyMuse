/*
  Warnings:

  - You are about to drop the column `due_date` on the `tasks` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `tasks` table. All the data in the column will be lost.
  - Made the column `studyPlan_id` on table `tasks` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "tasks" DROP CONSTRAINT "tasks_user_id_fkey";

-- AlterTable
ALTER TABLE "tasks" DROP COLUMN "due_date",
DROP COLUMN "user_id",
ADD COLUMN     "description" VARCHAR(500),
ALTER COLUMN "studyPlan_id" SET NOT NULL;
