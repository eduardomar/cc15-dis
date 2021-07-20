import { Options } from 'prettier';
import IOption from '../constants/IOption';

export interface IOutput {
  name: string;
  array: IOption[];
}

export interface IPrepare {
  dir: string;
  config: Options;
  constants: IOutput[];
}
