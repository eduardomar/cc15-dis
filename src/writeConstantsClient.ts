import fs from 'fs';
import path from 'path';
import readConfigPrettier from './readConfigPrettier';
import {
  actionCodes,
  transactionCategories,
  cbpRequestTypes,
  agencyCodes,
} from './constants';
import stringify from './utils/stringify';
import { IOutput, IPrepare } from './utils/interfaces';
import { mkdirSync, write } from './utils/files';

const normalizeArray = (opts: IOutput[], includeLabels: boolean) =>
  opts
    .map(
      (opt) =>
        `export const ${opt.name} = ${stringify(opt.array, includeLabels)}`,
    )
    .join(';\n');

const writeWithLabels = (prepare: IPrepare) => {
  const outputPath = path.join(prepare.dir, 'labels.js');
  const constants = normalizeArray(prepare.constants, false);

  write(outputPath, constants, prepare.config);
};

const writeWithoutLabels = (prepare: IPrepare) => {
  const outputPath = path.join(prepare.dir, 'values.js');
  const constants = normalizeArray(prepare.constants, true);

  write(outputPath, constants, prepare.config);
};

export default () => {
  const feathersPath = process.env.CLIENT || '';
  const prettierConfigPath = path.join(feathersPath, '.prettierrc.json');
  const outputDirPath = path.join(feathersPath, 'src/constants/dis');

  if (fs.existsSync(feathersPath)) {
    mkdirSync(outputDirPath);

    const prepare: IPrepare = {
      dir: outputDirPath,
      config: readConfigPrettier(prettierConfigPath),
      constants: [
        { name: 'actionCodes', array: actionCodes },
        { name: 'transactionCategories', array: transactionCategories },
        { name: 'cbpRequestTypes', array: cbpRequestTypes },
        { name: 'agencyCodes', array: agencyCodes },
      ],
    };
    writeWithLabels(prepare);
    writeWithoutLabels(prepare);
  } else {
    throw new Error(
      'The path to cc15-feathers is not configured (.env) or does not exist.',
    );
  }
};
