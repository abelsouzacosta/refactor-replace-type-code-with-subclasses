import { Employee } from "../Employee";

export class Engineer extends Employee {
  getType(): string {
    return `engineer`;
  }
}
