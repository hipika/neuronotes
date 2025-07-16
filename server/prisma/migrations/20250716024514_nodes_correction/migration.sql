/*
  Warnings:

  - A unique constraint covering the columns `[authorId]` on the table `Nodes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `authorId` to the `Nodes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Nodes" ADD COLUMN     "authorId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Nodes_authorId_key" ON "Nodes"("authorId");

-- AddForeignKey
ALTER TABLE "Nodes" ADD CONSTRAINT "Nodes_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
