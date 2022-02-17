import { configureStore, createSlice } from '@reduxjs/toolkit';

const AppStore = createSlice({
    name: 'AppStore',

    initialState: {
        currentMethod: {
            name: '',
            pressure: {
                tableSteps: []
            }
        },
    },

    reducers: {
        setCurrentMethod(state, action) {
            state.currentMethod = action.payload;
        },
        addTableStap(state, action) {
            state.currentMethod.pressure.tableSteps.push(action.payload);
        },
        changeTableInputValue(state, action) {
            state.currentMethod.pressure.tableSteps[action.payload.index][action.payload.name] = action.payload.value
        },
        changeTableInputRadio(state, action) {
            state.currentMethod.pressure.tableSteps.forEach(step => {
                step.selected = false;
            })
            state.currentMethod.pressure.tableSteps[action.payload].selected = true;
        }
    },
});

export const {
    setCurrentMethod,
    addTableStap,
    changeTableInputValue,
    changeTableInputRadio,
} = AppStore.actions;

export default configureStore({
    reducer: {
        AppStore: AppStore.reducer,
    },
});