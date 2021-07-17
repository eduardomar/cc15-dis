import * as dotenv from 'dotenv';
import writeConstantsFeathers from './writeConstantsFeathers';
import writeConstantsClient from './writeConstantsClient';

dotenv.config();
writeConstantsFeathers();
writeConstantsClient();
