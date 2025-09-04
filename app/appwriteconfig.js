import { Client, Databases, Storage, Account } from "appwrite";

const client = new Client();

client
    .setEndpoint("https://cloud.appwrite.io/v1") 
    .setProject("68b71f130026d60f10e7"); 

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

export default client;
