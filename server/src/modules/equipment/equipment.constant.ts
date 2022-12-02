export const EQUIPMENT_ROUTES = {
  main: 'equipment',
  create: 'create',
  getAll: 'get-all',
  getById: ':id',
};

export enum EStatus {
  assigned = 'assigned',
  stored = 'stored',
  archived = 'archived',
  office = 'office',
}
