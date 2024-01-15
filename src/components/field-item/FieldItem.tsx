import { GameField } from "../../models/game-field.interface";
import { GameFieldStatus } from "../../models/game-field-status.enum";
import { formatTime } from "../../functions/time-formatter.fn";
import { useAppDispatch } from "../../hooks/hooks";
import { updateField } from "../../reducers/selection.reducer";

import './FieldItem.css';
import { showInventory } from "../../reducers/inventory.reducer";

export function FieldItem(props: GameField) {
    // TODO: mark active field where you put seed
    // TODO: component needs to be re-rendered only when 'status' is OCCUPIED

    const dispatch = useAppDispatch(); // useDispatch

    /** Click handler */
    function handleClick() {
        console.log(props);

        // send crop id and farm field id to server
        // and server return updated farm field list?s
    }

    /** Select field to plant crop */
    function selectFarmField() {
        dispatch(updateField(props.id));
        dispatch(showInventory());
    }

    // TODO: animation to show that crop is ready to harvest
    /** STATUS: GROWN */
    const fieldGrown = (
        <div className="farm-field-tile ov-h h-[80px] w-[80px] pos-r cur-p d-f jc-c ai-c" onClick={handleClick}>
            <img src="/icons/pumpkin.png" alt="icon" className="w-[50px]" />
        </div>
    );

    // TODO: add dialog to confirm you wanna buy this field, or maybe disable it until don't have enough money
    /** STATUS: FOR SALE */
    const fieldForSale = (
        <div className="farm-field-tile ov-h h-[80px] w-[80px] d-f pos-r cur-p ai-c jc-c ta-c farm-field-tile--for-sale" onClick={handleClick}>
            <span>$</span>
        </div>
    );

    /** STATUS: EMPTY */
    // TODO: dialog with inventory, or show inventory in the bottom?
    const fieldEmpty=(
        <div className="farm-field-tile ov-h fft h-[80px] w-[80px] pos-r cur-p" onClick={selectFarmField}>
        </div>
    );

    /** STATUS: OCCUPIED */
    const fieldOccupied= (
        <div className="farm-field-tile ov-h h-[80px] w-[80px] pos-r d-f fxd-c jc-sb ai-c">
            <img src="/icons/pumpkin.png" alt="icon" className="fxg-1"/>
            <div className="farm-field-tile__time h-[14px] ta-c d-b w-full">{time()}</div>
        </div>
    );

    // TODO: time is need, when 'status' is 'occupied' only
    function time(): string {
        const seconds = props.from && props.to ? (props.to - props.from) : 0;
        return formatTime(seconds);
    }

    return (
        <>
            {
                // RENDER COMPONENT BASED ON 'STATUS' PROPERTY
                (() => {
                    switch (props.status) {
                        case GameFieldStatus.FIELD_EMPTY: return fieldEmpty;
                        case GameFieldStatus.FIELD_FOR_SALE: return fieldForSale;
                        case GameFieldStatus.FIELD_OCCUPIED: return fieldOccupied;
                        case GameFieldStatus.FIELD_GROWN: return fieldGrown;
                    }
                })()
            }
        </>
    );
}