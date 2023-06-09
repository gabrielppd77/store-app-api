import { IntersectionType } from '@nestjs/mapped-types';
import {
  IsString,
  MaxLength,
  IsNumber,
  IsOptional,
  Length,
  Max,
} from 'class-validator';

class AddressBody {
  @Length(8)
  cep: string;
  @Length(2)
  state: string;
  @IsString()
  @MaxLength(55)
  city: string;
  @IsString()
  @MaxLength(55)
  neighborhood: string;
  @IsString()
  @MaxLength(200)
  address: string;
  @IsNumber()
  @Max(99999)
  number: number;
  @MaxLength(255)
  @IsOptional()
  complement?: string;
}

class CompanyBody {
  @MaxLength(55)
  name: string;
  @MaxLength(11)
  phone: string;
  @MaxLength(255)
  @IsOptional()
  description?: string;
  @Length(14)
  registrationNumber: string;
  @IsString()
  @MaxLength(55)
  businessName: string;
  @IsString()
  @MaxLength(55)
  responsibleFullName: string;
  @Length(11)
  responsibleRegistrationNumber: string;
}

export class CreateCompanyBodyDTO extends IntersectionType(
  AddressBody,
  CompanyBody,
) {}
