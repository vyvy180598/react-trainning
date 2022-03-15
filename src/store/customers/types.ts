export type Customer = {
  id: string,
  name: string,
  food: string[]
}

export interface ICustomerState {
  value: Customer[]
}

export interface ICustomerFoodPayload {
  food: string;
  id: string;
}

