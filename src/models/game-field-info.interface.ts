import { GameFieldStatus } from "./game-field-status.enum";
import { GamePlant } from "./game-plant.interface";

// TODO: finish interface

export interface GameFieldInfo {
    id: string; // farm_field_(number)
    crop: GamePlant | undefined; // different property name?
    status: GameFieldStatus;
    time: number; // ? need it
    // price?
    from: number; // planted date
    to: number; // grow date
}