-- DropForeignKey
ALTER TABLE "companies" DROP CONSTRAINT "companies_addressId_fkey";

-- AddForeignKey
ALTER TABLE "companies" ADD CONSTRAINT "companies_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE CASCADE ON UPDATE CASCADE;
