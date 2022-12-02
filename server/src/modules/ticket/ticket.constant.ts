export const TICKET_ROUTES = {
  main: 'ticket',
  create: 'create',
  getAll: 'get-all',
  getById: ':id',
};
export enum EAction {
  replace = 'replace',
  provide = 'provide',
  withdraw = 'withdraw',
}
export enum EStatus {
  new = 'new',
  declined = 'declined',
  inProgress = 'in progress',
  finished = 'finished',
}
