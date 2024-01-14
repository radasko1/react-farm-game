import { GameFieldInfo } from "../../models/game-field-info.interface";
import { GameFieldStatus } from "../../models/game-field-status.enum";
import { formatTime } from "../../functions/time-formatter.fn";
import { useAppDispatch } from "../../hooks/hooks";
import { selectField } from "../../reducers/selection.reducer";
import './farm-field-tile.css';

export function FarmFieldTile(props: GameFieldInfo) {
    // TODO: mark active field where you put seed

    const dispatch = useAppDispatch(); // useDispatch

    // TODO: time is need, when 'status' is 'occupied' only
    function time(): string {
        const seconds = props.to - props.from;
        return formatTime(seconds);
    }

    /** Click handler */
    function handleClick() {
        console.log(props);

        // send crop id and farm field id to server
        // and server return updated farm field list?s
    }

    /** Select field to harvest crop */
    function selectFarmField() {
        dispatch(selectField(props.id)); // store action dispatch
    }

    /** STATUS: FOR SALE */
    const fieldForSale = (
        <div className="farm-field-tile ov-h h-[80px] w-[80px] d-f pos-r cur-p ai-c jc-c ta-c farm-field-tile--for-sale" onClick={handleClick}>
            <span>$</span>
        </div>
    );

    /** STATUS: EMPTY */
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

    // TODO: animation to show that crop is ready to harvest
    /** STATUS: GROWN */
    const fieldGrown = (
        <div className="farm-field-tile ov-h h-[80px] w-[80px] pos-r cur-p d-f jc-c ai-c" onClick={handleClick}>
            <img src="/icons/pumpkin.png" alt="icon" className="w-[50px]" />
        </div>
    );

    /** Cross line of component renderer */
    const renderFarmField=() => {
        switch (props.status) {
            case GameFieldStatus.FIELD_EMPTY: return fieldEmpty;
            case GameFieldStatus.FIELD_FOR_SALE: return fieldForSale;
            case GameFieldStatus.FIELD_OCCUPIED: return fieldOccupied;
            case GameFieldStatus.FIELD_GROWN: return fieldGrown;
        }
    }

    return (
        <>{renderFarmField()}</>
    );
}