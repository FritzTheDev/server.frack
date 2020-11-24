import 'reflect-metadata';
import { createConnection } from "typeorm";
import { configureEnv } from './utils/configure-env';

// load + validate environment variables
const main = async () => {
  configureEnv();
  await createConnection({ type: "postgres", url: process.env.DATABASE_URL, synchronize: true });
};

main();
