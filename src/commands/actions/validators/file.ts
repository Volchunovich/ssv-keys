import fs from 'fs';

export const fileExistsValidator = (filePath: string, message = ''): boolean | string => {
  filePath = sanitizePath(filePath);

  if (!fs.existsSync(filePath.trim())) {
    return message || 'Couldn’t locate keystore file or directory.';
  }
  return true;
};

export const jsonFileValidator = (filePath: string, message = ''): boolean | string => {
  let fileContents;
  filePath = sanitizePath(filePath);
  try {
    fileContents = fs.readFileSync(filePath, { encoding: 'utf-8' });
  } catch (e) {
    return message || 'Couldn’t read a file';
  }
  try {
    JSON.parse(fileContents);
  } catch (e) {
    return `Keystore file "${filePath}" must be .JSON format`;
  }
  return true;
};

/**
 * Make sure the path contains
 * @param path
 * @param regex
 */
export const sanitizePath = (path: string, regex?: RegExp): string => {
  return path.replace(regex || /\\([^a-zA-Z0-9_])/g, "$1");
};
