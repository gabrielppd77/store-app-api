import { Module } from '@nestjs/common';

import { DatabaseModule } from '@infra/database/database.module';
import { AuthModule } from '@infra/auth/auth.module';

import { CompanyController } from './controllers/company.controller';

import { CreateCompany } from '@app/use-cases/create-company';
import { GetCompanyByUser } from '@app/use-cases/get-company-by-user';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [CompanyController],
  providers: [CreateCompany, GetCompanyByUser],
})
export class HttpModule {}
