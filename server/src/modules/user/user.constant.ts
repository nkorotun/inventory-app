export const USER_ROUTES = {
  main: 'user',
  login: 'login',
  getAll: 'get-all',
  create: 'create',
  getById: ':id',
};

export const USER_ERRORS = {
  userUnauthorized: "User isn't authorized",
  userHasNoAccess: "User isn't has required access",
};
export enum ERole {
  admin = 'Admin',
  manager = 'Manager',
  user = 'User',
}

export enum EStatus {
  new = 'New',
  employed = 'Employed',
  dismissed = 'Dismissed',
}
