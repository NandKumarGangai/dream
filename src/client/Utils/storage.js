const myStorage = window.sessionStorage;

const setToken = _ => {
    myStorage.setItem('token', `Bearer ${_}`);
};

const getToken = () => myStorage.getItem('token');

const removeToken = () => myStorage.removeItem('token');

const clearStorage = () => myStorage.clear();

export const STORAGE = {
    setToken,
    getToken,
    removeToken,
    clearStorage
}