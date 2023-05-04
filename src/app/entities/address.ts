import { Entity } from '@app/common/entities/entity';

export interface AddressProps {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  address: string;
  number: string;
  complement?: string;
}

export class Address extends Entity<AddressProps> {
  public get cep() {
    return this.props.cep;
  }
  public get state() {
    return this.props.state;
  }
  public get city() {
    return this.props.city;
  }
  public get neighborhood() {
    return this.props.neighborhood;
  }
  public get address() {
    return this.props.address;
  }
  public get number() {
    return this.props.number;
  }
  public get complement() {
    return this.props.complement;
  }
}
