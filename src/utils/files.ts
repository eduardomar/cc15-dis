import fs from 'fs';
import prettier from 'prettier';
import message from '../constants/message';

export const unLink = (outputPath: string) => {
  if (fs.existsSync(outputPath)) {
    fs.unlinkSync(outputPath);
  }
};

export const write = (path: string, code: string, config: prettier.Options) => {
  unLink(path);
  const codePretty = prettier.format(`${message}\n\n${code}`, config);

  // console.debug({ codePretty });
  fs.writeFileSync(path, codePretty, {});
};

export const mkdirSync = (path: string) => {
  if (!fs.existsSync(path)) fs.mkdirSync(path);
};
