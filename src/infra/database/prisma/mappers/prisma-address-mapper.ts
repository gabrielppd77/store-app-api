import { Address as AddressPrisma } from '@prisma/client';
import { Address } from '@app/entities/address';

export class PrismaAddressMapper {
  static toPrisma(address: Address): AddressPrisma {
    return {
      id: address.id.toValue(),
      cep: address.cep,
      state: address.state,
      city: address.city,
      neighborhood: address.neighborhood,
      address: address.address,
      number: address.number,
      complement: address.complement,
    };
  }
}
