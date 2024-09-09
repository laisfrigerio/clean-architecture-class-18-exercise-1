import crypto from "crypto";
import { Account } from "../../src/interface/account.interface";
import { signUp } from "../../src/service/signup.service";
import { endConnection } from "../../src/repository/database";
import {
  getAccountByEmail,
  insertAccount,
} from "../../src/repository/account.repository";

jest.mock("../../src/repository/account.repository");
jest.mock("../../src/repository/database");

describe("Sign up", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (endConnection as jest.Mock).mockResolvedValue(true);
  });

  test("Should throw an error if the account already exists", async () => {
    const accountId = crypto.randomUUID();
    const account: Account = {
      id: accountId,
      name: "John Doe",
      email: "john.doe@example.com",
      password: "123456",
      cpf: "52904594051",
      isPassenger: true,
      carPlate: "",
      isDriver: false,
    };

    (getAccountByEmail as jest.Mock).mockResolvedValue(account);

    expect(signUp(account)).rejects.toThrow("Account already exists");
  });

  test("Should throw an error if the name is invalid", async () => {
    const accountId = crypto.randomUUID();
    const account: Account = {
      id: accountId,
      name: "John",
      email: "john.doe@example.com",
      password: "123456",
      cpf: "52904594051",
      isPassenger: true,
      carPlate: "",
      isDriver: false,
    };

    (getAccountByEmail as jest.Mock).mockResolvedValue(null);
    expect(signUp(account)).rejects.toThrow("Invalid name");
  });

  test("Should throw an error if the email is invalid", async () => {
    const accountId = crypto.randomUUID();
    const account: Account = {
      id: accountId,
      name: "John Due",
      email: "john.doe@example",
      password: "123456",
      cpf: "52904594051",
      isPassenger: true,
      carPlate: "",
      isDriver: false,
    };

    (getAccountByEmail as jest.Mock).mockResolvedValue(null);
    expect(signUp(account)).rejects.toThrow("Invalid email");
  });

  test("Should throw an error if the cpf is invalid", async () => {
    const accountId = crypto.randomUUID();
    const account: Account = {
      id: accountId,
      name: "John Due",
      email: "john.doe@example.com",
      password: "123456",
      cpf: "11111111111",
      isPassenger: true,
      carPlate: "",
      isDriver: false,
    };

    (getAccountByEmail as jest.Mock).mockResolvedValue(null);
    expect(signUp(account)).rejects.toThrow("Invalid cpf");
  });

  test("Should throw an error if the car plate is invalid", async () => {
    const accountId = crypto.randomUUID();
    const account: Account = {
      id: accountId,
      name: "John Due",
      email: "john.doe@example.com",
      password: "123456",
      cpf: "52904594051",
      isPassenger: false,
      carPlate: "A1C12ND",
      isDriver: true,
    };

    (getAccountByEmail as jest.Mock).mockResolvedValue(null);
    expect(signUp(account)).rejects.toThrow("Invalid car plate");
  });

  test("Should create a new account", async () => {
    const accountId = crypto.randomUUID();
    const account: Account = {
      id: accountId,
      name: "John Due",
      email: "john.doe@example.com",
      password: "123456",
      cpf: "52904594051",
      isPassenger: true,
      carPlate: "",
      isDriver: false,
    };

    (getAccountByEmail as jest.Mock).mockResolvedValue(null);
    (insertAccount as jest.Mock).mockResolvedValue(account);
    expect(await signUp(account)).toStrictEqual(account);
  });
});
