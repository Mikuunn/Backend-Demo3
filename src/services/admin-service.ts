import { prisma } from "@/utils/prisma";
import { GraphQLError } from "graphql";

const adminCvv = "666";

export const getAdmins = async () => {
  try {
    const result = await prisma.admin.findMany();
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching admins");
  }
};

export const getAdmin = async (id: string) => {
  try {
    const result = await prisma.admin.findUnique({ where: { id } });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching admins");
  }
};

export const registerAdmin = async (input: {
  email: string;
  password: string;
  cvv: string;
}) => {
  try {
    const cvv = adminCvv;
    console.log("cvv", cvv);

    const result = await prisma.admin.create({ data: input });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error creating admin");
  }
};
