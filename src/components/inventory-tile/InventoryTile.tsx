import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectField } from "../../reducers/selection.reducer";
import { updateItem } from "../../reducers/farm-field.reducer";
import { fetchPost } from "../../functions/fetch-post.fn";
import { GameInventorySlot } from "../../models/game-inventory-slot.interface";
import { API } from "../../constants/api";

import './InventoryTile.css';

// TODO: 999 is max count for each item

export function InventoryTile(props: GameInventorySlot) {
    const dispatch = useAppDispatch(); // useDispatch
    const selectedField = useAppSelector(state => state.selection.selectedFieldId);

    /** Handle click on inventory object */
    async function handleClick() {
        if (!!selectedField) {
            const updatedField = await fetchPost(`${API.server}/fields/plant`, { id: selectedField, plantId: props.cropId });

            // I don't find this a very happy solution, but whatever...
            dispatch(updateItem(updatedField));
        }

        // close inventory
        dispatch(selectField(undefined));
    }

    const { imageUrl, count } = props;

    return (
        <div className="inventory-object pos-r cur-p d-f jc-c ai-c" onClick={handleClick}>
            <div>
                <img src={imageUrl} className="w-[50px]" alt="" />
            </div>
            <div className="inventory-object__count pos-a">{count}</div>
        </div>
    );
}