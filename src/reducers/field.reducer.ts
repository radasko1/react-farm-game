import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { GameField } from "../models/game-field.interface";
import { KeyValue } from "../models/key-value.interface";

interface FieldReducerState {
    list: KeyValue<GameField>;
}

const initialState: FieldReducerState = {
    list: {},
};

export const fieldSlice = createSlice({
    name: 'field',
    initialState,
    reducers: {
        updateFieldList: (state, action: PayloadAction<KeyValue<GameField>>) => {
            state.list = action.payload;
        },
        updateFieldItem: (state, action: PayloadAction<GameField>) => {
            const id = action.payload.id;
            state.list[id] = action.payload;
        }
    }
});

export const { updateFieldList, updateFieldItem } = fieldSlice.actions;
