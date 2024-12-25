import { IConnection } from "@/app/types";
import mongoose from "mongoose";



export const connectToDB = async () => {
  //Connection Status
  const connection: IConnection = {};

  try {
    //checks if there is an existing connection
    if (connection.isConnected) return;
    // if already connected no need to proceed connecting again
    const db = await mongoose.connect(`${process.env.MONGODB}`);
    connection.isConnected = (db as any)?.connection[0].readyState as string;

    console.log("Successful COnnection");
  } catch (error) {
    throw new Error(error as string);
  }
};
