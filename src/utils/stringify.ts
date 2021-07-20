import IOption from '../constants/IOption';

export default (array: IOption[], onlyValue: boolean = false) => {
  // if (nullable) arr.unshift({ value: null, label: null });

  return `[${array.map((option: IOption): string => {
    if (onlyValue)
      return `'${option.value || ''}'${
        option.label ? ` // ${option.label}\n` : ''
      }`;

    return JSON.stringify(option);
  })}]`;
};
