import { MongoClient } from 'mongodb'

if (!process.env.REXMIT_DATABASE_URL) {
  throw new Error('invalid environment variable: "REXMIT_DATABASE_URL"')
}

const url = process.env.REXMIT_DATABASE_URL
const options = {}

let rexmit_mongo_client: any
let rexmit_mongo_client_promise: any

if (!process.env.REXMIT_DATABASE_URL) {
  throw new Error('please add your rexmit mongo url to .env.local')
}

// In production mode, it's best to not use a global variable.
rexmit_mongo_client = new MongoClient(url, options)
rexmit_mongo_client_promise = rexmit_mongo_client.connect()

export default rexmit_mongo_client_promise as Promise<MongoClient>
