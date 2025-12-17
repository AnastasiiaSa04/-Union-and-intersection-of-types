export type Admin = { name: string; permissions: string[] };
export type User = { name: string; email: string };
export type AdminUser = Admin & User;

export const adminUser: AdminUser = {
  name: "Ana",
  permissions: ["green", "write"],
  email: "ana@gmail.com"
};
