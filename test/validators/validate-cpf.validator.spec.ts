import { validateCpf } from "../../src/validators/validate-cpf.validator";

describe("Check valid CPF", () => {
  test("Should return false if the CPF has less than 11 digits", () => {
    const result = validateCpf("123456");
    expect(result).toBe(false);
  });

  test("Should return false if the CPF has more than 11 digits", () => {
    const result = validateCpf("123456789012");
    expect(result).toBe(false);
  });

  test("Should return false if all digits are the same", () => {
    const result = validateCpf("11111111111");
    expect(result).toBe(false);
  });

  test("Should return false if the CPF is invalid", () => {
    const result = validateCpf("52904594052");
    expect(result).toBe(false);
  });
});
