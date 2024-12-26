import { User } from "../models/models";
import { connectToDB } from "../utils";

export const fetchUsers = async () => {
  try {
    connectToDB();
    const users = await User.find();
    return users;
  } catch (e) {
    console.log("Error encountered: ", e);
    throw new Error(e as string);
  }
};
