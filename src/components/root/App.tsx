import { Player } from "../player/Player";
import { PLAYER } from "../../assets/player.mock";
import { InventoryContainer } from "../inventory-container/InventoryContainer";
import { FieldContainer } from "../field-container/FieldContainer";

import './App.css';

export function App() {
    return (
        <div className="app d-f jc-c ai-c">
            <div className="app__grid d-g">
                <div className="app__player-area">
                    <Player {...PLAYER} />
                </div>
                <div className="app_field-area">
                    <FieldContainer />
                </div>
                <div className="inventory-area">
                    <InventoryContainer />
                </div>
            </div>
        </div>
    );
}