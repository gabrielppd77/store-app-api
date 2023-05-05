import {
  Body,
  Controller,
  Post,
  Get,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';

import { CurrentUser } from '../decorators/current.user';

import { CreateCompany } from '@app/use-cases/create-company';
import { GetCompanyByUser } from '@app/use-cases/get-company-by-user';

import { CreateCompanyBodyDTO } from '@infra/http/dtos/create-company-body.dto';

import { CompanyViewModel } from '../view-models/company.view-model';

@Controller('company')
export class CompanyController {
  constructor(
    private createCompany: CreateCompany,
    private getCompanyByUser: GetCompanyByUser,
  ) {}

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

  @Get('getCompanyByUser')
  @HttpCode(HttpStatus.OK)
  async getCompanyByUserId(@CurrentUser() currentUser: UserPayload) {
    const company = await this.getCompanyByUser.execute({
      userId: currentUser.userId,
    });

    return {
      statusCode: HttpStatus.OK,
      message: 'Solicitação realizada com sucesso.',
      data: company ? CompanyViewModel.toHttp(company) : null,
    };
  }
}
