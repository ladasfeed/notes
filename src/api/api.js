
export const localStorageAPI = {
    getUserData() {
        return JSON.parse(localStorage.getItem("savedData"))
    }
};