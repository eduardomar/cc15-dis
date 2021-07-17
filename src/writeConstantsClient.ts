import fs from 'fs';
import path from 'path';
import prettier from 'prettier';
import readConfigPrettier from './readConfigPrettier';
import IOption from './constants/IOption';
import {
  actionCodes,
  transactionCategories,
  cbpRequestTypes,
  agencyCodes,
} from './constants';
import message from './message';

const toValue = (option: IOption): string => JSON.stringify(option);

const normalizeArray = (
  name: string,
  arr: IOption[],
  nullable: boolean = true,
) => {
  if (nullable) arr.unshift({ value: null, label: null });

  return `export const ${name}=[${arr.map(toValue)}]`;
};

export default () => {
  const feathersPath = process.env.CLIENT || '';
  const prettierConfigPath = path.join(feathersPath, '.prettierrc.json');
  const outputPath = path.join(feathersPath, 'src/constants/dis.js');

  if (fs.existsSync(feathersPath)) {
    const config = readConfigPrettier(prettierConfigPath);
    if (fs.existsSync(outputPath)) {
      fs.unlinkSync(outputPath);
    }

    const codePretty = `${message}\n\n${prettier.format(
      [
        normalizeArray('actionCodes', actionCodes),
        normalizeArray('transactionCategories', transactionCategories),
        normalizeArray('cbpRequestTypes', cbpRequestTypes),
        normalizeArray('agencyCodes', agencyCodes, false),
      ].join(';\n'),
      config,
    )}`;

    // console.debug({ codePretty });
    fs.writeFileSync(outputPath, codePretty, {});
  } else {
    throw new Error(
      'The path to cc15-feathers is not configured (.env) or does not exist.',
    );
  }
};
