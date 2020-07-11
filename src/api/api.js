
export const localStorageAPI = {
    getUserData() {
        return JSON.parse(localStorage.getItem("savedData"))
    },

    pushToStorage(tasks, settings) {
        const data = {
            tasks,
            settings
        };


        localStorage.setItem("savedData", JSON.stringify(data))
    }
};