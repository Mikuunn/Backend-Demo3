import { getPosts, getPost } from "@/services/post-service";

export const PostQueries = {
  getPosts: () => getPosts(),
  getPost: (_: unknown, { id }: { id: string }) => getPost(id),
};
