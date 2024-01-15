import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameField } from "../models/game-field.interface";

export interface FieldReducerState { list: GameField[]; }

const initialState: FieldReducerState = { list: [] }

export const fieldSlice = createSlice({
    name: 'field',
    initialState,
    reducers: {
        updateList: (state, action: PayloadAction<GameField[]>) => {
            state.list = action.payload;
        },
        updateItem: (state, action: PayloadAction<GameField>) => {
            state.list = state.list.map((item) => item.id === action.payload.id ? action.payload : item);
        }
    }
});

export const { updateList, updateItem } = fieldSlice.actions;
