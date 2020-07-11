

const themes = [
    {
        bgColor: {
            backgroundColor: '#6805F2'
        },
        cardColor: {
            backgroundColor: '#BF05F2'
        },
        newCardColor: {
            backgroundColor: '#f205e0'
        },
    },
    {
        bgColor: {
            backgroundColor: '#79C3BC'
        },
        cardColor: {
            backgroundColor: '#EED262'
        },
        newCardColor: {
            backgroundColor: '#F29985'
        },
    },
    {
        bgColor: {
            backgroundColor: '#F590BC'
        },
        cardColor: {
            backgroundColor: '#F54792'
        },
        newCardColor: {
            backgroundColor: '#A83065'
        },
    },
];

const initialState = {
    tempThemeIndex: 0,
    tempTheme: themes[0],
    view: "row"
};

const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_THEME': {
            const newIndex = (state.tempThemeIndex+1)%themes.length;
            return {
                ...state,
                tempThemeIndex: newIndex,
                tempTheme: themes[newIndex]
            }
        }
        case 'CHANGE_VIEW': {
            return {
                ...state,
                view: (state.view==='row' ? 'cards' : 'row')
            }
        }

        case 'SETTINGS_INIT': {
            return {
                ...action.payload
            }
        }

        default:
            return state
    }
};

export default settingsReducer;