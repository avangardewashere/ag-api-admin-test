import { User } from "../models/models";
import { connectToDB } from "../utils";

export const fetchUsers = async (query: string) => {
  console.log(query)
  const regex = new RegExp(query, "i");

  try {
    connectToDB();
    const users = await User.find({ username: { $regex: regex} });
    return users;
  } catch (e) {
    console.log("Error encountered: ", e);
    throw new Error(e as string);
  }
};
