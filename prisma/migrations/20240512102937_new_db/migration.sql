/*
  Warnings:

  - You are about to drop the column `src` on the `Pack` table. All the data in the column will be lost.
  - Added the required column `srcImg` to the `Pack` table without a default value. This is not possible if the table is not empty.
  - Added the required column `srcPrv` to the `Pack` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pack" DROP COLUMN "src",
ADD COLUMN     "srcImg" TEXT NOT NULL,
ADD COLUMN     "srcPrv" TEXT NOT NULL,
ALTER COLUMN "date" SET DEFAULT CURRENT_TIMESTAMP;
