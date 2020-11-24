import { config as loadEnv } from "dotenv";
import { cleanEnv, host, port, url } from 'envalid';

export const configureEnv = (): void => {
  loadEnv();
  cleanEnv(process.env, {
    PORT: port(),
    DATABASE_URL: url(),
    SERVER_HOST: host(),
    CLIENT_HOST: host(),
  });
};
