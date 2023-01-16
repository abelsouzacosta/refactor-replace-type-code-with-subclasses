let employeeTypes = ["engineer", "salesman", "manager"];

export class Employee {
  constructor(protected name: string, protected type: string) {
    this.validateType(type);
  }

  validateType(aType: string) {
    if (!employeeTypes.includes(aType.toLowerCase()))
      throw new Error(`Employee cannot be the type ${aType}`);
  }

  toString(): string {
    return `${this.name}: ${this.type}`;
  }

  getName(): string {
    return this.name;
  }

  getType(): string {
    return this.type;
  }
}
