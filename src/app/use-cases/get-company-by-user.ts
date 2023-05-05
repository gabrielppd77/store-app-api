import { Injectable } from '@nestjs/common';

import { Company } from '@app/entities/company';

import { CompanyRepository } from '@app/repositories/company.repository';

interface Request {
  userId: string;
}

type Response = Company | null;

@Injectable()
export class GetCompanyByUser {
  constructor(private companyRepository: CompanyRepository) {}

  async execute(request: Request): Promise<Response> {
    return await this.companyRepository.getCompanyByUser(request.userId);
  }
}
