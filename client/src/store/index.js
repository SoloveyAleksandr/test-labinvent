import { configureStore, createSlice } from '@reduxjs/toolkit';

const AppStore = createSlice({
    name: 'AppStore',

    initialState: {
        menuIsOpen: false,
        currentMethod: {},
        savedMethods: [],
    },

    reducers: {
        setOpenMenu(state) {
            state.menuIsOpen = !state.menuIsOpen;
        },
        setCurrentMethod(state, action) {
            state.currentMethod = action.payload;
        },
        addTableStap(state, action) {
            state.currentMethod.pressure.tableSteps.push(action.payload);
        },
        changeSelectedInput(state, action) {
            state.currentMethod.pressure.tableSteps.forEach(step => {
                step.selected = false;
            })
            state.currentMethod.pressure.tableSteps[action.payload].selected = true;
        },
        changeRampInput(state, action) {
            state.currentMethod.pressure.tableSteps[action.payload.index].ramp = action.payload.value;
        },
        changeRateInput(state, action) {
            state.currentMethod.pressure.tableSteps[action.payload.index].rate = action.payload.value;
        },
        changeValueInput(state, action) {
            state.currentMethod.pressure.tableSteps[action.payload.index].value = action.payload.value;
        },
        changeHoldTimeInput(state, action) {
            state.currentMethod.pressure.tableSteps[action.payload.index].holdTime = action.payload.value;
        },
        changeRunTimeInput(state, action) {
            state.currentMethod.pressure.tableSteps[action.payload.index].runTime = action.payload.value;
        },
        setCurrentMethodName(state, action) {
            state.currentMethod.name = action.payload;
        },
        setSaveMethods(state, action) {
            state.savedMethods = action.payload;
        },
        toggleControlModeStatus(state) {
            state.currentMethod.column.controlOn = !state.currentMethod.column.controlOn;
        },
        saveCurrentMethodName(state) {
            state.currentMethodName = state.currentMethod.name;
        }
    },
});

export const {
    setOpenMenu,
    setCurrentMethod,
    addTableStap,
    changeSelectedInput,
    changeRampInput,
    changeRateInput,
    changeValueInput,
    changeHoldTimeInput,
    changeRunTimeInput,
    setCurrentMethodName,
    setSaveMethods,
    toggleControlModeStatus,
    saveCurrentMethodName,
} = AppStore.actions;

export default configureStore({
    reducer: {
        AppStore: AppStore.reducer,
    },
});