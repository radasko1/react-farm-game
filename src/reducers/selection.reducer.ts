import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SelectionReducerState {
    selectedFieldId?: string;
    selectedPlantId?: string;
}

const initialState: SelectionReducerState = {
    selectedFieldId: undefined,
    selectedPlantId: undefined
}

export const selectionSlice = createSlice({
    name: 'selection',
    initialState,
    reducers: {
        selectField: (state, action: PayloadAction<string | undefined>) => {
            state.selectedFieldId = action.payload
        },
        selectPlant: (state, action: PayloadAction<string | undefined>) => {
            state.selectedPlantId = action.payload
        }
    }
});

export const { selectField, selectPlant } = selectionSlice.actions;
