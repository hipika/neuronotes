-- CreateTable
CREATE TABLE "Nodes" (
    "id" SERIAL NOT NULL,
    "x" INTEGER NOT NULL,
    "y" INTEGER NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "Nodes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Edges" (
    "id" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "target" TEXT NOT NULL,

    CONSTRAINT "Edges_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Nodes_label_key" ON "Nodes"("label");

-- CreateIndex
CREATE UNIQUE INDEX "Edges_id_key" ON "Edges"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Edges_source_key" ON "Edges"("source");

-- CreateIndex
CREATE UNIQUE INDEX "Edges_target_key" ON "Edges"("target");
