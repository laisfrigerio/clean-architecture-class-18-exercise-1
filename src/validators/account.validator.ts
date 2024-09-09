const hasFirstAndLastName = (value: string): boolean => {
  const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
  return nameRegex.test(value);
};

const hasValidEmail = (value: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(value);
};

const hasValidCarPlate = (value: string): boolean => {
  const carPlateRegex = /^[A-Z]{3}[0-9]{4}$/;
  return carPlateRegex.test(value);
};

export { hasFirstAndLastName, hasValidEmail, hasValidCarPlate };
