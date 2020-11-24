import 'reflect-metadata';
import { configureEnv } from './utils/configure-env';

// load + validate environment variables
const main = async () => {
  configureEnv();
};

main();
