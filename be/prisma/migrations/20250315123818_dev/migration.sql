-- CreateTable
CREATE TABLE "CandyStoreComment" (
    "id" SERIAL NOT NULL,
    "candyStoreAddress" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "data" TEXT NOT NULL,

    CONSTRAINT "CandyStoreComment_pkey" PRIMARY KEY ("id")
);
