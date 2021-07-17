import fs from 'fs';
import path from 'path';
import { Options } from 'prettier';

const defaultConfig = path.join(__dirname, '../.prettierrc.json');

const readFile = (pathFile: string): Options => {
  try {
    // console.debug({ pathFile });
    if (fs.existsSync(pathFile)) {
      const rawData = fs.readFileSync(pathFile);
      return {
        ...(JSON.parse(rawData.toString()) as Options),
        parser: 'babel',
      };
    }

    return readFile(defaultConfig);
  } catch (err) {
    // console.error(err);
  }

  return {
    parser: 'babel',
  };
};

export default readFile;
