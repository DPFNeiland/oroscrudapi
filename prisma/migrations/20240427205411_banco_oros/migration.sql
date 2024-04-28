-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "nome" TEXT,
    "naturalidade" TEXT,
    "estadocivil" TEXT,
    "datadenascimento" TEXT,
    "email" TEXT NOT NULL,
    "cpf" TEXT,
    "cep" TEXT,
    "senha" TEXT NOT NULL,
    "idade" TEXT,
    "telefone" TEXT,
    "apelido" TEXT,
    "NomeSocial" TEXT,
    "FiliacaoMae" TEXT,
    "FiliacaoPai" TEXT,
    "genero" TEXT,
    "OrientacaoSexual" TEXT,
    "Autodeclaracao" TEXT,
    "IdentidadeDeGenero" TEXT,
    "rg" TEXT,
    "SSP" TEXT,
    "UfOrgaoEmissor" TEXT,
    "Nacionalidade" TEXT,
    "UFdenaturalidade" TEXT,
    "Naturalidade" TEXT,
    "Profissao" TEXT,
    "Estado" TEXT,
    "municipo" TEXT,
    "endereco" TEXT,
    "bairro" TEXT,
    "numero" TEXT,
    "logradouro" TEXT,
    "complemento" TEXT,

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

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");

-- AddForeignKey
ALTER TABLE "bookmarks" ADD CONSTRAINT "bookmarks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
