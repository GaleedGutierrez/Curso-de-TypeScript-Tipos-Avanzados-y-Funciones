enum ROLES {
    ADMIN = 'admin',
    SELLER = 'seller',
    CUSTOMER = 'customer',
}

type User = {
    username: string;
    role: ROLES;
}

const galeedUser: User = {
    username: 'galeed',
    role: ROLES.ADMIN
}
