"use server";
import { revalidatePath } from "next/cache";
import { Product, User } from "./models/models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { IUserType } from "@/app/types";
import { sign } from "crypto";
import { signIn } from "next-auth/react";
export const addUser = async (formData: FormData) => {
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

export const addProduct = async (formData: FormData) => {
  const { title, description, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newProduct = new Product({
      title,
      description,
      price,
      stock,
      color,
      size,
    });

    await newProduct.save();
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/dashboard/products");

  redirect("/dashboard/products");
};

export const deleteProduct = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delte the product");
  }
  revalidatePath("/dashboard/products");
};

export const deleteUser = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete the User");
  }
  revalidatePath("/dashboard/users");
};

export const updateUser = async (formData: FormData) => {
  const formDataEntries = Object.fromEntries(formData.entries());
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    formDataEntries as {
      id: string;
      username?: string;
      email?: string;
      password?: string;
      phone?: string;
      address?: string;
      isAdmin?: string;
      isActive?: string;
    };

  try {
    connectToDB();
    // Prepare fields to update
    const updateFields: Partial<{
      username: string;
      email: string;
      password: string;
      phone: string;
      address: string;
      isAdmin: boolean;
      isActive: boolean;
    }> = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin: isAdmin === "true",
      isActive: isActive === "true",
    };

    // Remove empty or undefined fields
    Object.keys(updateFields).forEach((key) => {
      if (!updateFields[key as keyof typeof updateFields]) {
        delete updateFields[key as keyof typeof updateFields];
      }
    });

    // Update user in the database
    await User.findByIdAndUpdate(id, updateFields, { new: true });
  } catch (error) {
    console.log(error);
    throw new Error("failed to update user");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateProducts = async (formData: FormData) => {
  const formDataEntries = Object.fromEntries(formData.entries());
  const { id, title, description, price, stock, color, size } =
    formDataEntries as {
      id: string;
      title: string;
      description?: string;
      price: string;
      stock?: string;
      color?: string;
      size?: string;
    };

  try {
    connectToDB();

    const updateFields: {
      title: string;
      description?: string;
      price: string;
      stock?: string;
      color?: string;
      size?: string;
    } = {
      title,
      description,
      price,
      stock,
      color,
      size,
    };

    Object.keys(updateFields).forEach((key) => {
      if (!updateFields[key as keyof typeof updateFields]) {
        delete updateFields[key as keyof typeof updateFields];
      }
    });
    // Update  Product in the database
    await Product.findByIdAndUpdate(id, updateFields, { new: true });
  } catch (e) {
    console.log(e);
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const authenticate = async (formData: FormData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error  );
    throw error;
  }
};
