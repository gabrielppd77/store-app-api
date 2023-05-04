import { Module } from '@nestjs/common';

import { PrismaService } from './prisma/prisma.service';

import { CompanyRepository } from '@app/repositories/company.repository';
import { PrismaCompanyRepository } from './prisma/repositories/prisma-company.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: CompanyRepository,
      useClass: PrismaCompanyRepository,
    },
  ],
  exports: [CompanyRepository],
})
export class DatabaseModule {}
