import { getAdmin, getAdmins } from "@/services/admin-service";

export const AdminQueries = {
  getAdmins: () => getAdmins(),
  getAdmin: (_: unknown, { id }: { id: string }) => getAdmin(id),
};
