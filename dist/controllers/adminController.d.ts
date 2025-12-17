export type Admin = {
    name: string;
    permissions: string[];
};
export type User = {
    name: string;
    email: string;
};
export type AdminUser = Admin & User;
export declare const adminUser: AdminUser;
//# sourceMappingURL=adminController.d.ts.map