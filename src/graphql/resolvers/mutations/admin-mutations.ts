import { registerAdmin } from "@/services/admin-service";

export const AdminMutations = {
  registerAdmin: (
    _: unknown,
    { input }: { input: { email: string; password: string; cvv: string } }
  ) => registerAdmin(input),
};
