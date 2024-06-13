export const extractTextFromDescription = (description: string): string => {
  // I need to match content of first  <p> tag
  const regex = /<p>(.*?)<\/p>/;

  const match = description.match(regex);

  if (match) {
    return match[1];
  }

  return "";
};

