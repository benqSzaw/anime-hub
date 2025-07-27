export const urlValidation = (value: string) => {
  const urlPattern = /^(https?|ftp):\/\/[^\s\/$.?#].\S*$/;
  return (
    urlPattern.test(value) ||
    'Link must be a valid URL example: https://example.com'
  );
};
