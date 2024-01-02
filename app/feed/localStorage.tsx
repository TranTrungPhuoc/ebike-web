// localStorage.js
export const setLocalStorageItem = (key:any, value:any) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

export const getLocalStorageItem = (key:any) => {
    if (typeof window !== 'undefined') {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : null;
    }
    return null;
};

export const removeLocalStorageItem = (key:any) => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(key);
    }
};