-- CreateTable
CREATE TABLE "Asset" (
    "address" TEXT NOT NULL,
    "collection" TEXT NOT NULL,
    "metadata" TEXT NOT NULL,

    CONSTRAINT "Asset_pkey" PRIMARY KEY ("address")
);
