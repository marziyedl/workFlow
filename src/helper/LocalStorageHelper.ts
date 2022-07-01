export const setLocalStorage = (value: string, key: string) => {
  localStorage.setItem(key, value);
};
export const getFromLocalStorage = (key: string) => {
  localStorage.getItem(key);
};
