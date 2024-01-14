import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameFieldInfo } from "../models/game-field-info.interface";

export interface FieldReducerState {
    list: GameFieldInfo[];
}

const initialState: FieldReducerState = {
    list: []
}

export const fieldSlice = createSlice({
    name: 'field',
    initialState,
    reducers: {
        updateList: (state, action: PayloadAction<GameFieldInfo[]>) => {
            state.list = action.payload;
        },
        updateItem: (state, action: PayloadAction<GameFieldInfo>) => {
            state.list = [...state.list, action.payload]; // map() ?
        }
    }
});

export const { updateList, updateItem } = fieldSlice.actions;
