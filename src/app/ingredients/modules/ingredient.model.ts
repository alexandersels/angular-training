export class Ingredient {
  name: string;
  amount: number;

  constructor(base?: Partial<Ingredient>) {
    this.name = base.name || this.name;
    this.amount = base.amount || this.amount;
  }

  get asObject(): any {
    return {
      name: this.name,
      amount: this.amount
    };
  }
}
