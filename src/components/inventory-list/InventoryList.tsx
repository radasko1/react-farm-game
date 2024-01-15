import { GameInventorySlot } from "../../models/game-inventory-slot.interface";
import { InventoryItem } from "../inventory-item/InventoryItem";

interface InventoryListProps {
    list: GameInventorySlot[];
}

export function InventoryList(props: InventoryListProps) {
    return (
        <div className="inventory__list d-g">
            { props.list.map((inventory) =>
                (<InventoryItem key={inventory.id} {...inventory} />)
            ) }
        </div>
    );
}