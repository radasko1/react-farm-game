import { FarmFieldTile } from "../farm-field-tile/farm-field-tile.component";
import './farm-field.css';
import { GAME_OBJECT_FARM_FIELD } from "../../assets/field.mock";

const fieldList = GAME_OBJECT_FARM_FIELD;

export function FarmField() {
    return (
        <div className="farm-field">
            {fieldList.map((f,i) => (<FarmFieldTile key={f.id} {...f} />))}
        </div>
    );
}