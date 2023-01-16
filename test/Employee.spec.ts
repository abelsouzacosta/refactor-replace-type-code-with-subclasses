import { Employee } from "../src/Employee";

describe("Employee", () => {
  let employee: Employee;

  beforeAll(() => {
    employee = new Employee("Abel", "Engineer");
  });

  it("should create a instance of employee with the correct number", () => {
    let name = employee.getName();

    expect(name).toBe("Abel");
  });

  it("should create a instance of employee with the correct type", () => {
    let type = employee.getType();

    expect(type).toBe("Engineer");
  });

  describe("Type Validations", () => {
    it("should not create an instance of employee and thorw an error", () => {
      expect(() => new Employee("Abel", "IT")).toThrow(
        new Error("Employee cannot be the type IT")
      );
    });
  });
});
