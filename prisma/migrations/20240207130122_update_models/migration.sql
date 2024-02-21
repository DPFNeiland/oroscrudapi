/*
  Warnings:

  - You are about to drop the `Boletim` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Boletim";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "datadeNascimento" TIMESTAMP(3),
    "nome" TEXT,
    "cpf" TEXT,
    "email" TEXT NOT NULL,
    "telefone" INTEGER,
    "senha" TEXT NOT NULL,
    "idade" INTEGER,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bookmarks" (
    "id" SERIAL NOT NULL,
    "DatadeCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "TipoDeOcorrencia" TEXT NOT NULL,
    "DescricaodoBoletin" TEXT NOT NULL,
    "NomeDoDenunciante" TEXT NOT NULL,
    "ContatoDoDenunciante" INTEGER NOT NULL,
    "EnderecoDoDenunciante" TEXT NOT NULL,
    "NomeDaVitima" TEXT,
    "ContatoDaVitima" TEXT,
    "EnderecoDaVitima" TEXT,
    "EnderecoDoIncidente" TEXT NOT NULL,
    "DescricaoDoLocal" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "bookmarks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "bookmarks" ADD CONSTRAINT "bookmarks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
