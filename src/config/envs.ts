import 'dotenv/config'
import * as joi from 'joi'

interface EnvVars{
  PORT:number;
  DATABASE_URL: string;
  NATS_SERVERS : string[];
  DB_NAME: string;
  DB_PASSWORD: string;
  DB_USER: string;
  DB_HOST: string;
  DB_PORT: number;
}

const envsSchema = joi.object({
  PORT: joi.number().required(),
  DATABASE_URL :joi.string().required(),
  NATS_SERVERS : joi.array().items(joi.string()).required(),
  DB_NAME : joi.string().required(),
  DB_PASSWORD: joi.string().required(),
  DB_USER : joi.string().required(),
  DB_HOST: joi.string().required(),
  DB_PORT: joi.number().required(),
})
.unknown(true)

const {error, value} =envsSchema.validate({
  ...process.env, NATS_SERVERS: process.env.NATS_SERVERS?.split(',')
})

if(error){
  throw new Error(`Config validation error: ${error.message}`)
}

const envVars:EnvVars = value

export const envs = {
  port: envVars.PORT,
  database_url : envVars.DATABASE_URL,
  natsServers : envVars.NATS_SERVERS,
  db_name : envVars.DB_NAME,
  db_password : envVars.DB_PASSWORD,
  db_user : envVars.DB_USER,
  db_host: envVars.DB_HOST,
  db_port : envVars.DB_PORT,
}