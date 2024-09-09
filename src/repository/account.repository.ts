import { Account } from "../interface/account.interface";

const getAccountByEmail = async (connection: any, email: string) => {
  const [acc] = await connection.query(
    "select * from ccca.account where email = $1",
    [email]
  );

  return acc;
};

const insertAccount = async (
  connection: any,
  { id, name, email, cpf, carPlate, isPassenger, isDriver, password }: Account
) => {
  await connection.query(
    "insert into ccca.account (account_id, name, email, cpf, car_plate, is_passenger, is_driver, password) values ($1, $2, $3, $4, $5, $6, $7, $8)",
    [id, name, email, cpf, carPlate, !!isPassenger, !!isDriver, password]
  );
};

export { getAccountByEmail, insertAccount };
