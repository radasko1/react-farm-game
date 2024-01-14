import { Player } from "../player/Player";
import { PLAYER } from "../../assets/player.mock";
import { FarmField } from "../farm-field/FarmField";
import { Inventory } from "../inventory/Inventory";

import './App.css';

export function App() {
    // TODO: perform all fetch from database in useEffect only once when app started?

    return (
        <div className="app d-f jc-c ai-c">
            <div className="app__grid d-g">
                <div className="app__player-area">
                    <Player {...PLAYER} />
                </div>
                <div className="app_field-area">
                    <FarmField />
                </div>
                <div className="inventory-area">
                    <Inventory />
                </div>
            </div>
        </div>
    );
}