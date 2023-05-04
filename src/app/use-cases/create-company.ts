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
    const adressCompany = new Address({
      cep: request.addressCompany.cep,
      state: request.addressCompany.state,
      city: request.addressCompany.city,
      neighborhood: request.addressCompany.neighborhood,
      address: request.addressCompany.address,
      number: request.addressCompany.number,
      complement: request.addressCompany.complement,
    });

    const newCompany = new Company({
      userId: request.company.userId,
      name: request.company.name,
      phone: request.company.phone,
      description: request.company.description,
      registrationNumber: request.company.registrationNumber,
      businessName: request.company.businessName,
      responsibleFullName: request.company.responsibleFullName,
      responsibleRegistrationNumber:
        request.company.responsibleRegistrationNumber,
      addressId: adressCompany.id.toValue(),
      address: adressCompany,
    });

    await this.companyRepository.create(newCompany);
  }
}
