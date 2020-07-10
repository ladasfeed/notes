
export const localStorageAPI = {
    getUserData() {
        return JSON.parse(localStorage.getItem("savedData"))
    },

    pushToStorage(state) {
        const data = {
            tasks: state.taskListReducer.tasks
        };

        localStorage.setItem("savedData", JSON.stringify(data))
    }
};