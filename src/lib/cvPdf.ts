import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { profile } from '../data/profile';

// True once the PDF has been added under public/, so pages never link to a missing file.
export const hasCvPdf = existsSync(join(process.cwd(), 'public', profile.cvPdf));
