import { GameFieldStatus } from "./game-field-status.enum";
import { GamePlant } from "./game-plant.interface";

export interface GameField {
    id: string; // farm_field_(number)
    status: GameFieldStatus;
    // optional
    crop?: GamePlant;
    price?: number;
    from?: number; // planted date
    to?: number; // grow date
}