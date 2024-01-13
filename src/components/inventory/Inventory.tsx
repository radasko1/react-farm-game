import { useState } from "react";
import { InventoryObject } from "../inventory-object/InventoryObject";
import { GameInventorySlot } from "../../models/game-inventory-slot.interface";
import './inventory.css';

// TODO: get from server
const INVENTORY_LIST: GameInventorySlot[] = [
    { id: 'game_inventory_slot_0', cropId: 'game_object_wheat', count: 2, imageUrl: '/icons/pumpkin.png' },
    { id: 'game_inventory_slot_1', cropId: 'game_object_sugar_beets', count: 1, imageUrl: '/icons/pumpkin.png' },
]

export function Inventory() {
    const [isActive, setActive] = useState(false);

    return (
        <div className="inventory d-g">
            { INVENTORY_LIST.map((inv) =>
                (<InventoryObject key={inv.id} {...inv} />)
            ) }
        </div>
    );
}