import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { GamePlayer } from "../models/game-player.interface";

const initialState: GamePlayer = {
    experience: 0,
    level: 1,
    name: '-',
    money: 0,
};

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        updatePlayer: (state, action: PayloadAction<GamePlayer>) => {
            state = action.payload;
        },
    }
});

export const { updatePlayer } = playerSlice.actions;
