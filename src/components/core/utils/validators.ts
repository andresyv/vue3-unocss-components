export const isRequired = (value: string) => {
  if (value && value.trim()) {
    return true;
  }
  return false;
};

export const isEmail = (value: string) => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return regex.test(value);
};
