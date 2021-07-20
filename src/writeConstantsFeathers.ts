import fs from 'fs';
import path from 'path';
import readConfigPrettier from './readConfigPrettier';
import {
  messageTypes,
  actionCodes,
  packageCategories,
  transactionCategories,
  cbpRequestTypes,
  docPreviouslySubmitted,
  agencyCodes,
  invoiceTypes,
  tradePartyTypes,
} from './constants/index';
import stringify from './utils/stringify';
import { IOutput } from './utils/interfaces';
import { write } from './utils/files';

const normalizeArray = (opts: IOutput[]) =>
  `module.exports = {${opts
    .map((opt) => `${opt.name}: ${stringify(opt.array, true)}`)
    .join(',\n')}}`;

export default () => {
  const feathersPath = process.env.FEATHERS || '';
  const prettierConfigPath = path.join(feathersPath, '.prettierrc.json');
  const outputPath = path.join(
    feathersPath,
    'src/services/translations/type/toDIS/validateEnvelope/constants.js',
  );

  if (fs.existsSync(feathersPath)) {
    const config = readConfigPrettier(prettierConfigPath);
    const constants = normalizeArray([
      {
        name: 'messagesTypes',
        array: messageTypes.map((mt) => ({
          value: (mt.value || '').toLocaleUpperCase(),
          label: mt.label,
        })),
      },
      { name: 'actionCodes', array: actionCodes },
      { name: 'packageCategories', array: packageCategories },
      { name: 'transactionCategories', array: transactionCategories },
      { name: 'cbpRequestTypes', array: cbpRequestTypes },
      { name: 'docPreviouslySubmitted', array: docPreviouslySubmitted },
      { name: 'agencyCodes', array: agencyCodes },
      { name: 'invoiceTypes', array: invoiceTypes },
      { name: 'tradePartyTypes', array: tradePartyTypes },
    ]);

    write(outputPath, constants, config);
  } else {
    throw new Error(
      'The path to cc15-client is not configured (.env) or does not exist.',
    );
  }
};
