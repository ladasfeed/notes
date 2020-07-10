
export const localStorageAPI = {
    getUserData() {
        return JSON.parse(localStorage.getItem("savedData"))
    },
    pushToStorage(state) {
        const data = {
            tasks: state.taskListReducer.tasks
        };

        console.log(data)

        localStorage.setItem("savedData", JSON.stringify(data))
    }
};