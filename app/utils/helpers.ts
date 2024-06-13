export const extractTextFromDescription = (description: string): string => {
  // I need to match content of first  <p> tag
  const regex = /<p>(.*?)<\/p>/;

  const match = description.match(regex);

  if (match) {
    return match[1];
  }

  return "";
};

export const extractErrorPartsForTranslation = (error: string) => {
  const parts = error.split("_");

  return {
    field: parts[0] || "",
    errorName: parts[1] || "",
    number: parseInt(parts[2]) || 0,
  };
};

export const constructErrorText = (
  error: string,
  pathToField: string,
  pathToError: string,
  translateFunc: (any: any) => any
) => {
  const { field, errorName, number } = extractErrorPartsForTranslation(error);

  const translatedField = translateFunc(`${pathToField}.${field}`);

  const translatedError = translateFunc(`${pathToError}.${errorName}`);

  return `${translatedField} ${translatedError} ${number ? number : ""}`;
};
