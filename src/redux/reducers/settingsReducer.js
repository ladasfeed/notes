const initialState = {
    tempTheme: {},
    view: ""
};

const themes = [
    {
        bgColor: '#6805F2',
        cardColor: '#BF05F2',
        newCardColor: '#f205e0'
    },
    {
        bgColor: '#79C3BC',
        cardColor: '#EED262',
        newCardColor: '#F29985'
    },
    {
        bgColor: '#F590BC',
        cardColor: '#F54792',
        newCardColor: '#A83065'
    },
];

const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "": {
            return {...state, initialized: action.payload}
        }
        default:
            return state
    }
};

export default settingsReducer;