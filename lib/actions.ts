import { revalidatePath } from "next/cache";
import { User } from "./models/models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
export const addUser = async (formData: FormData) => {
  "use server";
//   const { username, email, password, phone, address, isAdmin, isActive } =
//     Object.fromEntries(formData);

  // Safely parse the FormData
  const formDataEntries = Object.fromEntries(formData.entries());
  const { username, email, password, phone, address, isAdmin, isActive } =
    formDataEntries as {
      username: string;
      email: string;
      password: string;
      phone: string;
      address: string;
      isAdmin: string;
      isActive: string;
    };

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("failed to create new user");
  }

  revalidatePath("/dashboard/users");

  redirect("/dashboard/users");
};
