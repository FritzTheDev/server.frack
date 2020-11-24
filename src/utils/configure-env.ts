import { config as loadEnv } from "dotenv";
import { cleanEnv, host, port } from 'envalid';

export const configureEnv = (): void => {
  loadEnv();
  cleanEnv(process.env, {
    PORT: port(),
    SERVER_HOST: host(),
    CLIENT_HOST: host(),
  });
};
