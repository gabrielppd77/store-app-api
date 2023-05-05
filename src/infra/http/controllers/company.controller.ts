import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';

import { CreateCompany } from '@app/use-cases/create-company';

import { CreateCompanyBodyDTO } from '@infra/http/dtos/create-company-body.dto';
import { CurrentUser } from '../decorators/current.user';

@Controller('company')
export class CompanyController {
  constructor(private createCompany: CreateCompany) {}

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() body: CreateCompanyBodyDTO,
    @CurrentUser() currentUser: UserPayload,
  ) {
    const {
      name,
      phone,
      description,
      registrationNumber,
      businessName,
      responsibleFullName,
      responsibleRegistrationNumber,
    } = body;
    const { cep, state, city, neighborhood, address, number, complement } =
      body;

    await this.createCompany.execute({
      company: {
        userId: currentUser.userId,
        name,
        phone,
        description,
        registrationNumber,
        businessName,
        responsibleFullName,
        responsibleRegistrationNumber,
      },
      addressCompany: {
        cep,
        state,
        city,
        neighborhood,
        address,
        number,
        complement,
      },
    });

    return {
      statusCode: HttpStatus.CREATED,
      message: 'Solicitação realizada com sucesso.',
      data: null,
    };
  }
}
