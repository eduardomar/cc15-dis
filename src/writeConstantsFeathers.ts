import fs from 'fs';
import path from 'path';
import prettier from 'prettier';
import readConfigPrettier from './readConfigPrettier';
import IOption from './constants/IOption';
import {
  messageTypes,
  actionCodes,
  packageCategories,
  transactionCategories,
  cbpRequestTypes,
  invoiceTypes,
  tradePartyTypes,
  docPreviouslySubmitted,
} from './constants/index';
import message from './message';

const toValue = (option: IOption): string | null => option.value;

export default () => {
  const feathersPath = process.env.FEATHERS || '';
  const prettierConfigPath = path.join(feathersPath, '.prettierrc.json');
  const outputPath = path.join(
    feathersPath,
    'src/services/translations/type/toDIS/validateEnvelope/constants.js',
  );

  if (fs.existsSync(feathersPath)) {
    const config = readConfigPrettier(prettierConfigPath);
    const constants = {
      messagesTypes: messageTypes.map((option) =>
        (toValue(option) || '').toLocaleUpperCase(),
      ),
      actionCodes: actionCodes.map(toValue),
      packageCategories: packageCategories.map(toValue),
      transactionCategories: transactionCategories.map(toValue),
      cbpRequestTypes: cbpRequestTypes.map(toValue),
      docPreviouslySubmitted: docPreviouslySubmitted.map(toValue),
      invoiceTypes: invoiceTypes.map(toValue),
      tradePartyTypes: tradePartyTypes.map(toValue),
    };

    if (fs.existsSync(outputPath)) {
      fs.unlinkSync(outputPath);
    }

    const codePretty = `${message}\n\n${prettier.format(
      `module.exports=${JSON.stringify(constants)}`,
      config,
    )}`;

    // console.debug({ codePretty });
    fs.writeFileSync(outputPath, codePretty, {});
  } else {
    throw new Error(
      'The path to cc15-client is not configured (.env) or does not exist.',
    );
  }
};
