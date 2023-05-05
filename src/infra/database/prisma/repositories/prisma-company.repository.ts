import { Injectable } from '@nestjs/common';

import { Company } from '@app/entities/company';
import { CompanyRepository } from '@app/repositories/company.repository';

import { PrismaService } from '../prisma.service';

import { PrismaCompanyMapper } from '../mappers/prisma-company-mapper';
import { PrismaAddressMapper } from '../mappers/prisma-address-mapper';

@Injectable()
export class PrismaCompanyRepository implements CompanyRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(company: Company): Promise<void> {
    const companyPrisma = PrismaCompanyMapper.toPrisma(company);
    const addressPrisma = PrismaAddressMapper.toPrisma(company.address);

    await this.prisma.company.create({
      data: {
        id: companyPrisma.id,
        userId: companyPrisma.userId,
        name: companyPrisma.name,
        phone: companyPrisma.phone,
        description: companyPrisma.description,
        registrationNumber: companyPrisma.registrationNumber,
        businessName: companyPrisma.businessName,
        responsibleFullName: companyPrisma.responsibleFullName,
        responsibleRegistrationNumber:
          companyPrisma.responsibleRegistrationNumber,
        address: {
          create: addressPrisma,
        },
      },
    });
  }
}
