/*
  Warnings:

  - You are about to drop the column `Nome` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "Nome",
ADD COLUMN     "nome" TEXT,
ALTER COLUMN "datadeNascimento" DROP NOT NULL,
ALTER COLUMN "cpf" DROP NOT NULL,
ALTER COLUMN "telefone" DROP NOT NULL,
ALTER COLUMN "idade" DROP NOT NULL;
