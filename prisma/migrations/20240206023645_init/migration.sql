-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "datadeNascimento" TIMESTAMP(3) NOT NULL,
    "Nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" INTEGER NOT NULL,
    "senha" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Boletim" (
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

    CONSTRAINT "Boletim_pkey" PRIMARY KEY ("id")
);
