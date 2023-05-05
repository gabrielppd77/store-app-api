import { Entity } from '@app/common/entities/entity';
import { Address } from './address';

export interface CompanyProps {
  userId: string;
  name: string;
  phone: string;
  description?: string;
  registrationNumber: string;
  businessName: string;
  responsibleFullName: string;
  responsibleRegistrationNumber: string;
  addressId: string;
  address?: Address;
}

export class Company extends Entity<CompanyProps> {
  public get userId() {
    return this.props.userId;
  }
  public get name() {
    return this.props.name;
  }
  public get phone() {
    return this.props.phone;
  }
  public get description() {
    return this.props.description;
  }
  public get registrationNumber() {
    return this.props.registrationNumber;
  }
  public get businessName() {
    return this.props.businessName;
  }
  public get responsibleFullName() {
    return this.props.responsibleFullName;
  }
  public get responsibleRegistrationNumber() {
    return this.props.responsibleRegistrationNumber;
  }
  public get addressId() {
    return this.props.addressId;
  }
  public get address() {
    return this.props.address;
  }
}
