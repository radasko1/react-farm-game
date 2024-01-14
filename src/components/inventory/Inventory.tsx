import { useEffect, useState } from "react";
import { InventoryTile } from "../inventory-tile/InventoryTile";
import { GameInventorySlot } from "../../models/game-inventory-slot.interface";
import { useAppSelector } from "../../hooks/hooks";
import './inventory.css';

// TODO: get from server
const INVENTORY_LIST: GameInventorySlot[] = [
    { id: 'game_inventory_slot_0', cropId: 'game_object_wheat', count: 2, imageUrl: '/icons/pumpkin.png' },
    { id: 'game_inventory_slot_1', cropId: 'game_object_sugar_beets', count: 1, imageUrl: '/icons/pumpkin.png' },
]

export function Inventory() {
    const [isActive, setActive] = useState(false);
    const selectedField = useAppSelector(state => state.selection.selectedFieldId);

    useEffect(() => {
        // TODO: get all the inventory items from Redux
    }, []);

    // Open inventory after click on field with empty status, which is part of action to 'harvest crop'
    useEffect(() => {
        setActive(!!selectedField); // truthy value for 'active' state toggle
    }, [selectedField]); // can be?

    // Don't render component whether is not supposed to be visible
    if (!isActive) {
        return null;
    }

    const listItems = INVENTORY_LIST.map((inv) => (<InventoryTile key={inv.id} {...inv} />));

    return (
        <div className="inventory d-g">
            {listItems}
        </div>
    );
}