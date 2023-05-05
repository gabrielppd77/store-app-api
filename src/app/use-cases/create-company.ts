import { Injectable } from '@nestjs/common';

import { Address, AddressProps } from '@app/entities/address';
import { Company, CompanyProps } from '@app/entities/company';

import { CompanyRepository } from '@app/repositories/company.repository';

interface Request {
  company: Omit<CompanyProps, 'addressId' | 'address'>;
  addressCompany: AddressProps;
}

type Response = void;

@Injectable()
export class CreateCompany {
  constructor(private companyRepository: CompanyRepository) {}
  async execute(request: Request): Promise<Response> {
    const adressCompany = new Address(request.addressCompany);

    const newCompany = new Company({
      ...request.company,
      addressId: adressCompany.id.toValue(),
      address: adressCompany,
    });

    await this.companyRepository.create(newCompany);
  }
}
