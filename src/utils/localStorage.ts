export const saveToLocalStorage = <T>(key: string, value: T): void => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error("Error saving to localStorage", error);
  }
};

export const loadFromLocalStorage = <T>(key: string): T | null => {
  try {
    const serializedValue = localStorage.getItem(key);
    if (!serializedValue) return null;
    return JSON.parse(serializedValue) as T;
  } catch (error) {
    console.error("Error loading from localStorage", error);
    return null;
  }
};
