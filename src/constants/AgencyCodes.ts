import IOption from './IOption';

const options: IOption[] = [
  { value: 'AMS', label: 'Agricultural Marketing Service (AMS)' },
  { value: 'APH', label: 'Animal and Plant Health Inspection Service (APHIS)' },
  {
    value: 'ATF',
    label: 'Bureau of Alcohol, Tobacco, Firearms and Explosives (ATF)',
  }, // <- No tenia
  { value: 'CBC', label: 'Department of Commerce Bureau of the Census (CBC)' },
  { value: 'CDC', label: 'Centers for Disease Control and Prevention (CDC)' },
  { value: 'CPS', label: 'Consumer Products Safety Commission (CPSC)' },
  { value: 'DCM', label: 'Defense Contract Management Agency (DCMA)' },
  { value: 'DEA', label: 'Drug Enforcement Administration (DEA)' }, // <- No tenia
  { value: 'DTC', label: 'Directorate of Defense Trade Controls (DDTC)' },
  {
    value: 'ECO',
    label: 'Department of Commerce Enforcement and Compliance (E&C)',
  },
  { value: 'EPA', label: 'Environmental Protection Agency (EPA)' },
  { value: 'FAS', label: 'Foreign Agricultural Service (FAS)' },
  { value: 'FSI', label: 'Food Safety and Inspection Service (FSIS)' },
  {
    value: 'FWS',
    label: 'U.S. Department of the Interior, Fish & Wildlife Service (FWS)',
  },
  {
    value: 'IRS',
    label: 'Department of Treasury, Internal Revenue Service (IRS)',
  },
  {
    value: 'NHT',
    label: 'National Highway Traffic Safety Administration (NHTSA)',
  },
  { value: 'NMF', label: 'National Marine Fisheries Service (NMFS)' },
  { value: 'OMC', label: 'Office of Marine Conservation (OMC)' },
  { value: 'OTX', label: 'Office of Textiles and Apparel (OTEXA)' },
  { value: 'TRP', label: 'Office of U.S. Trade Representative (TRP)' },
  { value: 'TTB', label: 'Alcohol and Tobacco Tax and Trade (TTB)' },
  {
    value: 'COM',
    label: 'Common Documents NOT Owned by any Particular Agency (COM)',
  },
  { value: 'CBP', label: 'Customs and Border Protection (CBP)' },
];

export default options;
