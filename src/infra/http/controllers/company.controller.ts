import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';

import { CreateCompany } from '@app/use-cases/create-company';

import { CreateCompanyBody } from '@infra/http/dtos/create-company-body';
import { GetCurrentUser } from '../decorators/get-current-user';

@Controller('company')
export class CompanyController {
  constructor(private createCompany: CreateCompany) {}

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() body: CreateCompanyBody, @GetCurrentUser() currentUser) {
    const { addressCompany, company } = body;

    console.log({ currentUser });

    throw new Error('No implements');

    await this.createCompany.execute({
      company: {
        userId: '',
        name: company.name,
        phone: company.phone,
        description: company.description,
        registrationNumber: company.registrationNumber,
        businessName: company.businessName,
        responsibleFullName: company.responsibleFullName,
        responsibleRegistrationNumber: company.responsibleRegistrationNumber,
      },
      addressCompany: {
        cep: addressCompany.cep,
        state: addressCompany.state,
        city: addressCompany.city,
        neighborhood: addressCompany.neighborhood,
        address: addressCompany.address,
        number: addressCompany.number,
        complement: addressCompany.complement,
      },
    });

    return {
      statusCode: HttpStatus.CREATED,
      message: 'Solicitação realizada com sucesso.',
      data: null,
    };
  }
}
