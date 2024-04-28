const loadDataFromSessionStorage = (key) => {
    try {
        const serializedData = sessionStorage.getItem(key);
        return serializedData ? JSON.parse(serializedData) : undefined;
    } catch (error) {
        return undefined;
    }
};

const loadDataFromLocalStorage = (key) => {
    try {
        const serializedData = localStorage.getItem(key);
        return serializedData ? JSON.parse(serializedData) : undefined;
    } catch (error) {
        return undefined;
    }
};

const saveOnLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

const saveOnSessionStorage = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
}

export { loadDataFromSessionStorage, loadDataFromLocalStorage, saveOnLocalStorage, saveOnSessionStorage }