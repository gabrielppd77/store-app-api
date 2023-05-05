import { Company as CompanyPrisma } from '@prisma/client';
import { Company } from '@app/entities/company';

export class PrismaCompanyMapper {
  static toPrisma(company: Company): CompanyPrisma {
    return {
      id: company.id.toValue(),
      userId: company.userId,
      name: company.name,
      phone: company.phone,
      description: company.description,
      registrationNumber: company.registrationNumber,
      businessName: company.businessName,
      responsibleFullName: company.responsibleFullName,
      responsibleRegistrationNumber: company.responsibleRegistrationNumber,
      addressId: company.addressId,
    };
  }

  static toDomain(company: CompanyPrisma): Company {
    return new Company(
      {
        userId: company.userId,
        name: company.name,
        phone: company.phone,
        description: company.description,
        registrationNumber: company.registrationNumber,
        businessName: company.businessName,
        responsibleFullName: company.responsibleFullName,
        responsibleRegistrationNumber: company.responsibleRegistrationNumber,
        addressId: company.addressId,
      },
      company.id,
    );
  }
}
