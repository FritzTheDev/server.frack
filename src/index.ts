import 'reflect-metadata';
import cors from 'cors';
import Express from 'express';
import { createConnection } from 'typeorm';
import { configureEnv } from './utils/configure-env';
import morgan from 'morgan';

// load + validate environment variables
const main = async () => {
  configureEnv();
  // connect to the database
  await createConnection({ type: 'postgres', url: process.env.DATABASE_URL, synchronize: true });
  console.info('Database Connection Established Successfully');

  // create & configure expresss app
  const app = Express();

  // global middleware
  app.use(cors({ origin: process.env.CLIENT_HOST }));
  // logs more if in development
  const logSetting = process.env.NODE_ENV === 'production' ? 'tiny' : 'dev';
  app.use(morgan(logSetting));
  console.info(`Logger started in ${logSetting} mode`);
};

main();
