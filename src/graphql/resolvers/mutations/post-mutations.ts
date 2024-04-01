import { registerPost } from "@/services/post-service";

export const PostMutations = {
  registerPost: (
    _: unknown,
    {
      input,
    }: {
      input: {
        image: string;
        title: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
      };
    }
  ) => registerPost(input),
};
