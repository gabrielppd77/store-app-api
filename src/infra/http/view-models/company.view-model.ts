import { Company } from '@app/entities/company';

export class CompanyViewModel {
  static toHttp(company: Company) {
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
}
