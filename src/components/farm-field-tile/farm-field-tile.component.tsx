import { GameFieldInfo } from "../../models/game-field-info.interface";
import { GameFieldStatus } from "../../models/game-field-status.enum";
import { formatTime } from "../../functions/time-formatter.fn";
import './farm-field-tile.css';

export function FarmFieldTile(props: GameFieldInfo) {
    // TODO: mark active field where you put seed

    // time is need, when 'status' is 'occupied' only
    const time = (): string => {
        const seconds = props.to - props.from;
        return formatTime(seconds);
    };

    /** Click handler */
    const handleClick = () => {
        console.log(props);

        // send crop id and farm field id to server
        // and server return updated farm field list?s
    }

    /** Select field to harvest crop */
    const selectField = () => {
        console.log(props.id);
    }

    /** STATUS: FOR SALE */
    const fieldForSale = (
        <div className="farm-field-tile w-[80px] d-f pos-r cur-p ai-c jc-c ta-c farm-field-tile--for-sale" onClick={handleClick}>
            <span>$</span>
        </div>
    );

    /** STATUS: EMPTY */
    const fieldEmpty=(
        <div className="farm-field-tile w-[80px] pos-r cur-p" onClick={selectField}>
        </div>
    );

    /** STATUS: OCCUPIED */
    const fieldOccupied= (
        <div className="farm-field-tile w-[80px] pos-r">
            <div>image</div>
            <div className="farm-field-tile__time ta-c d-b w-full">{ time() }</div>
        </div>
    );

    // TODO: animation to show that crop is ready to harvest
    const fieldGrown = (
        <div className="farm-field-tile w-[80px] pos-r cur-p d-f jc-c ai-c" onClick={handleClick}>
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

    // different status means - different classname, different picture, toggle time bar
    // save status into useState hook
    // re-render status

    return (
        <>{renderFarmField()}</>
    );
}