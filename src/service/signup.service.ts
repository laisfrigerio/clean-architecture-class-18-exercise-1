import crypto from "crypto";
import { getConnection, endConnection } from "../repository/database";
import {
  getAccountByEmail,
  insertAccount,
} from "../repository/account.repository";
import {
  hasFirstAndLastName,
  hasValidEmail,
  hasValidCarPlate,
} from "../validators/account.validator";
import { validateCpf } from "../validators/validate-cpf.validator";
import { Account, AccountDTO } from "../interface/account.interface";

const signUp = async (input: AccountDTO) => {
  let connection;

  try {
    const connection = getConnection();

    const accountId = crypto.randomUUID();
    const account = await getAccountByEmail(connection, input.email);

    if (account) {
      throw new Error("Account already exists");
    }

    if (!hasFirstAndLastName(input.name)) {
      throw new Error("Invalid name");
    }

    if (!hasValidEmail(input.email)) {
      throw new Error("Invalid email");
    }

    if (!validateCpf(input.cpf)) {
      throw new Error("Invalid cpf");
    }

    if (input.isDriver && !hasValidCarPlate(input.carPlate)) {
      throw new Error("Invalid car plate");
    }

    const newAccount: Account = { id: accountId, ...input };
    await insertAccount(connection, newAccount);

    return newAccount;
  } catch (e) {
    throw e;
  } finally {
    await endConnection(connection);
  }
};

export { signUp };
