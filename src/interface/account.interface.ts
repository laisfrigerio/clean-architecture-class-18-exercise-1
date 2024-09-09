interface AccountDTO {
  name: string;
  email: string;
  password: string;
  cpf: string;
  isPassenger: boolean;
  isDriver: boolean;
  carPlate: string;
}

interface Account {
  id: string;
  name: string;
  email: string;
  password: string;
  cpf: string;
  isPassenger: boolean;
  isDriver: boolean;
  carPlate: string;
}

export { Account, AccountDTO };
