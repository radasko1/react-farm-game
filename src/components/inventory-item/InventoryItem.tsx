import { useAppDispatch } from "../../hooks/hooks";
import { updatePlant } from "../../reducers/selection.reducer";
import { GameInventorySlot } from "../../models/game-inventory-slot.interface";
import { hideInventory } from "../../reducers/inventory.reducer";

import './InventoryTile.css';

export function InventoryItem(props: GameInventorySlot) {
    const dispatch = useAppDispatch(); // useDispatch

    /** Handle click on Inventory item */
    function handleClick() {
        dispatch(updatePlant(props.itemId));
        dispatch(hideInventory());
    }

    return (
        <div className="inventory-object pos-r cur-p d-f jc-c ai-c" onClick={handleClick}>
            <div>
                <img src={props.imageUrl} className="w-[50px]" alt="" />
            </div>
            <div className="inventory-object__count pos-a">{props.count}</div>
        </div>
    );
}