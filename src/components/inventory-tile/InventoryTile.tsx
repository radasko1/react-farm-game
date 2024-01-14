import { GameInventorySlot } from "../../models/game-inventory-slot.interface";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectField } from "../../reducers/selection.reducer";
import './InventoryTile.css';

// TODO: 999 is max count for each item

export function InventoryTile(props: GameInventorySlot) {
    const { imageUrl, count } = props;
    const dispatch = useAppDispatch(); // useDispatch
    const selectedField = useAppSelector(state => state.selection.selectedFieldId);

    function handleClick() {
        if (!!selectedField) {
            console.log('harvest new crop:', props.cropId, ' in this field:', selectedField);
        }

        // close inventory
        dispatch(selectField(undefined));
    }

    return (
        <div className="inventory-object pos-r cur-p d-f jc-c ai-c" onClick={handleClick}>
            <div>
                <img src={imageUrl} className="w-[50px]" alt="" />
            </div>
            <div className="inventory-object__count pos-a">{count}</div>
        </div>
    );
}