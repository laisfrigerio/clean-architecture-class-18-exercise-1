import {
  hasFirstAndLastName,
  hasValidCarPlate,
  hasValidEmail,
} from "../../src/validators/account.validator";

describe("Check valid name", () => {
  test("Should return false if the name has numbers", () => {
    const result = hasFirstAndLastName("John 2 Doe");
    expect(result).toBe(false);
  });

  test("Should return false if the name has special characters in the middle of the string", () => {
    const result = hasFirstAndLastName("John @ Doe");
    expect(result).toBe(false);
  });

  test("Should return false if the name has special characters in the beginner of the string", () => {
    const result = hasFirstAndLastName("@John Doe");
    expect(result).toBe(false);
  });

  test("Should return false if the name has special characters in the end of the string", () => {
    const result = hasFirstAndLastName("John Doe@");
    expect(result).toBe(false);
  });

  test("Should return false if the name has only one word", () => {
    const result = hasFirstAndLastName("John");
    expect(result).toBe(false);
  });

  test("Should return true if the name has only letters and is a valid name", () => {
    const result = hasFirstAndLastName("John Doe");
    expect(result).toBe(true);
  });
});

describe("Check valid email", () => {
  test("Should return false if the email has no @", () => {
    const result = hasValidEmail("john.doe.com");
    expect(result).toBe(false);
  });

  test("Should return false if the email has no .", () => {
    const result = hasValidEmail("john@doe");
    expect(result).toBe(false);
  });

  test("Should return false if the email has no domain", () => {
    const result = hasValidEmail("john@doe.");
    expect(result).toBe(false);
  });

  test("Should return false if the email has no username", () => {
    const result = hasValidEmail("@doe.com");
    expect(result).toBe(false);
  });

  test("Should return true if the email has a valid format", () => {
    const result = hasValidEmail("john.doe@gmail.com");
    expect(result).toBe(true);
  });
});

describe("Check valid car plate", () => {
  test("Should return false if the car plate has no letters in the beginning", () => {
    const result = hasValidCarPlate("1234ABC");
    expect(result).toBe(false);
  });

  test("Should return false if the car plate has no numbers in the end", () => {
    const result = hasValidCarPlate("ABCDEFG");
    expect(result).toBe(false);
  });

  test("Should return false if the car plate has less than 7 characters", () => {
    const result = hasValidCarPlate("ABC123");
    expect(result).toBe(false);
  });

  test("Should return false if the car plate has more than 7 characters", () => {
    const result = hasValidCarPlate("ABC12345");
    expect(result).toBe(false);
  });

  test("Should return true if the car plate has 3 letters in the beginning and 4 numbers in the end", () => {
    const result = hasValidCarPlate("ABC1234");
    expect(result).toBe(true);
  });
});
