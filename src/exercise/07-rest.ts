import { ROLES, User } from "./01-enum";

const currentUser: User = {
    username: 'Galeed',
    role: ROLES.CUSTOMER
}

export const checkAdminRole = () => {
    if (currentUser.role === ROLES.ADMIN) return true;
    return false;
}

export const checkRole = (role1: string, role2: string) => {
    if (currentUser.role === role1 || currentUser.role === role2) return true;
    return false;
}

export const checkRoleV2 = (roles: string[]) => {
    const rta = roles.includes(currentUser.role);
    return rta;
}

export const checkRoleV3 = (...roles: string[]) => {
    const rta = roles.includes(currentUser.role);
    return rta;
}

const checkAdminRole_ = checkAdminRole();
const checkRoleV1_ = checkRole(ROLES.ADMIN, ROLES.SELLER);
const checkRoleV2_ = checkRoleV2([ROLES.ADMIN, ROLES.SELLER]);
const checkRoleV3_ = checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);
console.log({
    checkAdminRole_,
    checkRoleV1_,
    checkRoleV2_,
    checkRoleV3_
});
