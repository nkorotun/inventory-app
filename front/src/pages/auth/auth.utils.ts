export const getErrorsState = (errors: Object, touched: Object) => {
  const validate = (nameField: string) => {
    return (
      errors[nameField as keyof typeof errors] &&
      touched[nameField as keyof typeof touched]
    );
  };
  return validate;
};
