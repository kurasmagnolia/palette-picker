// 1. setLocalStorageKey - a wrapper that automatically stringifies the value and sets it to the key
const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// 2.
const getLocalStorageKey = (key) => {
  const storedValue = localStorage.getItem(key);
  return JSON.parse(storedValue);
};
