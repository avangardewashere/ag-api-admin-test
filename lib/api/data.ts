import { User } from "../models/models";

export const fetchUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (e) {
    console.log("Error encountered: ", e);
  }
};
