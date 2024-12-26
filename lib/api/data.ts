import { User } from "../models/models";
import { connectToDB } from "../utils";

export const fetchUsers = async (query: string, page: string) => {
  const regex = new RegExp(query, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).countDocuments();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (Number(page) - 1));
    return { count, users };
  } catch (e) {
    console.log("Error encountered: ", e);
    throw new Error(e as string);
  }
};
