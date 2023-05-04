import {
  IsString,
  IsNotEmpty,
  MaxLength,
  IsNumber,
  IsOptional,
} from 'class-validator';

class AddressBody {
  @MaxLength(8)
  cep: string;
  @IsString()
  state: string;
  @IsString()
  city: string;
  @IsString()
  neighborhood: string;
  @IsString()
  address: string;
  @IsNumber()
  number: string;
  @MaxLength(255)
  @IsOptional()
  complement?: string;
}

class CompanyBody {
  @IsString()
  name: string;
  @MaxLength(11)
  phone: string;
  @MaxLength(255)
  description: string;
  @MaxLength(14)
  registrationNumber: string;
  @IsString()
  businessName: string;
  @IsString()
  responsibleFullName: string;
  @MaxLength(11)
  responsibleRegistrationNumber: string;
}

export class CreateCompanyBody {
  @IsNotEmpty()
  addressCompany: AddressBody;

  @IsNotEmpty()
  company: CompanyBody;
}
