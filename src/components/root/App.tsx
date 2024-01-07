import React, { Component } from 'react';
import { Player } from "../player/Player";
import { Inventory } from "../Inventory";
import { ProgressBar } from "../progress-bar/ProgressBar";
import { PLAYER } from "../../assets/player.mock";
import './App.css';
import { Status } from "../status/Status";

export class App extends Component {

    render() {
        return (
            <div className="app">
                <div className="app__grid">
                    <div className="app__player-area">
                        <Player name={PLAYER.name} experience={PLAYER.experience} avatar={PLAYER.avatar} />
                    </div>
                    <div className="app__inventory-area">
                        <Inventory />
                    </div>
                    <div className="app__stats-area">
                        <ProgressBar title="Zdraví" value={PLAYER.health} maxValue={100} />
                        <ProgressBar title="WC" value={80} maxValue={100} />
                        <ProgressBar title="Energie" value={50} maxValue={100} />
                    </div>
                    <div className="app__skills-area">
                        <ProgressBar title="Síla" value={PLAYER.strength} maxValue={100} />
                        <ProgressBar title="Inteligence" value={PLAYER.intelligence} maxValue={100} />
                    </div>
                    <div className="app__celltimer-area">
                        <Status />
                    </div>
                </div>
            </div>
        );
    }
}