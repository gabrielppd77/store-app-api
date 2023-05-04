import { Company } from '@app/entities/company';
import { CompanyRepository } from '@app/repositories/company.repository';

import { PrismaService } from '../prisma.service';

export class PrismaCompanyRepository implements CompanyRepository {
  constructor(private prisma: PrismaService) {}

  async create(company: Company): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
