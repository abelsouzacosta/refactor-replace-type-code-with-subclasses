let employeeTypes = ["engineer", "salesman", "manager"];

export class Employee {
  constructor(protected name: string, protected type: string) {
    this.validateType(this.type);
    this.createEmployee(name, type);
  }

  validateType(aType: string) {
    if (!employeeTypes.includes(aType.toLowerCase()))
      throw new Error(`Employee cannot be the type ${aType}`);
  }

  createEmployee(name: string, type: string): Employee {
    switch (type.toLowerCase()) {
      case "engineer":
        return new Engineer(name, type);
      case "salesman":
        return new Salesman(name, type);
      case "manager":
        return new Manager(name, type);
      default:
        throw new Error(`Employee cannot be of the type ${type}`);
    }
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

export class Engineer extends Employee {
  getType(): string {
    return `engineer`;
  }
}

export class Salesman extends Employee {
  getType(): string {
    return `salesman`;
  }
}

export class Manager extends Employee {
  getType(): string {
    return `manager`;
  }
}
