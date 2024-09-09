import pgp from "pg-promise";

const getConnection = () => {
  const connection = pgp()("postgres://postgres:123456@localhost:5432/app");
  return connection;
};

const endConnection = async (connection: any) => {
  await connection.$pool.end();
};

export { getConnection, endConnection };
