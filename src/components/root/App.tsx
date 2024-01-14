import { Player } from "../player/Player";
import { PLAYER } from "../../assets/player.mock";
import { FarmField } from "../farm-field/FarmField";
import './App.css';
import { Inventory } from "../inventory/Inventory";

export function App() {
    return (
        <div className="app">
            <div className="app__grid">
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