import { db } from "@/lib/db";
import { constants } from "crypto";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: { email },
    });
    // findUnique() is a prisma function that identify the given email is already used or not!
    return user;
  } catch {
    return null;
  }
}
    ;
export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: { id },
    });
    return user;
  } catch {
    return null;
  }
};
