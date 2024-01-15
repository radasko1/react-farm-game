import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameInventorySlot } from "../models/game-inventory-slot.interface";

export interface InventoryReducerState {
    isVisible: boolean;
    list: GameInventorySlot[];
}

const initialState: InventoryReducerState = {
    isVisible: false,
    list: [],
}

export const inventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
        updateInventoryList: (state, action: PayloadAction<GameInventorySlot[]>) => {
          state.list = action.payload;
        },
        showInventory: (state, action: PayloadAction) => {
            state.isVisible = true;
        },
        hideInventory: (state, action: PayloadAction) => {
            state.isVisible = false;
        },
    }
});

export const { showInventory, hideInventory, updateInventoryList } = inventorySlice.actions;
