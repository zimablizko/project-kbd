export const saveManager = {
  save: (key: string, data: any) => localStorage.setItem(key, JSON.stringify(data)),
  load: (key: string) => (localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) || '') : null),
  reset: (key: string) => localStorage.removeItem(key),
};
