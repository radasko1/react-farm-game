import { configureStore } from "@reduxjs/toolkit";

import { selectionSlice } from "./reducers/selection.reducer";
import { fieldSlice } from "./reducers/field.reducer";
import { inventorySlice } from "./reducers/inventory.reducer";
import { playerSlice } from "./reducers/player.reducer";

export const store = configureStore({
    reducer: {
        selection: selectionSlice.reducer,
        field: fieldSlice.reducer,
        inventory: inventorySlice.reducer,
        player: playerSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;