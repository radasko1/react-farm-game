import { GameInventorySlot } from "../../models/game-inventory-slot.interface";
import './InventoryObject.css';

// TODO: 999 is max count for each item

export function InventoryObject(props: GameInventorySlot) {
    const { imageUrl, count } = props;

    return (
        <div className="inventory-object pos-r cur-p d-f jc-c ai-c">
            <div>
                <img src={imageUrl} className="w-[50px]" />
            </div>
            <div className="inventory-object__count pos-a">{count}</div>
        </div>
    );
}