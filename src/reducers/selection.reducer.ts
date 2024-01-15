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
        updateField: (state, action: PayloadAction<string | undefined>) => {
            state.selectedFieldId = action.payload
        },
        updatePlant: (state, action: PayloadAction<string | undefined>) => {
            state.selectedPlantId = action.payload
        },
        resetSelection: (state, action: PayloadAction) => {
            state = initialState;
        }
    }
});

export const { updateField, updatePlant, resetSelection } = selectionSlice.actions;
