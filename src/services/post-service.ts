import { prisma } from "@/utils/prisma";
import { GraphQLError } from "graphql";

export const getPosts = async () => {
  try {
    const result = await prisma.post.findMany();
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching Posts");
  }
};

export const getPost = async (id: string) => {
  try {
    const result = await prisma.post.findUnique({ where: { id } });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching post");
  }
};

export const registerPost = async (input: {
  image: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}) => {
  try {
    const result = await prisma.post.create({ data: input });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error creating Post");
  }
};
