import 'reflect-metadata';
import cors from 'cors';
import Express from 'express';
import { createConnection } from 'typeorm';
import { configureEnv } from './utils/configure-env';
import morgan from 'morgan';

const main = async () => {

  /* Initial Setup */
  // load + validate environment variables
  configureEnv();
  // connect to the database
  await createConnection({ type: 'postgres', url: process.env.DATABASE_URL, synchronize: true });
  console.info(`INFO: Database Connection Established Successfully`);

  // create & configure expresss app
  const app = Express();

  /* Global Middleware */
  // logs the cors configuration in case you forget to set it correctly.
  app.use(cors({ origin: process.env.CLIENT_HOST }));
  console.info(`INFO: CORS configured to allow access from ${process.env.CLIENT_HOST}`);

  // Set up logger - logs more if NODE_ENV is development
  const logSetting = process.env.NODE_ENV === 'production' ? 'tiny' : 'dev';
  app.use(morgan(logSetting));
  console.info(`INFO: Logger started in ${logSetting} mode`);
};

main();
