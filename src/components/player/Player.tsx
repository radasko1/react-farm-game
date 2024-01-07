import React, { Component } from 'react';
import { PlayerLeveling } from '../../assets/leveling.const';
import './Player.css';

interface PlayerProps {
    name: string;
    experience: number;
    avatar: string;
}

interface PlayerProgress {
    level: number;
    experience: number;
    maximalExperience: number;
}

export class Player extends Component<PlayerProps> {
    /**
     * Calculate player progress in game
     * @return Player current level and remaining experience to the next level
     */
    calculateProgress(): PlayerProgress {
        let level = 0,
            maximalExperience = 0,
            experience = this.props.experience;

        for (let i = 0; i < PlayerLeveling.length; i++) {
            if (experience > PlayerLeveling[i].maxExperience) {
                experience = experience - PlayerLeveling[i].maxExperience;

                continue;
            }

            // Show values for next level
            level = PlayerLeveling[i].level;
            maximalExperience = PlayerLeveling[i].maxExperience;

            break;
        }

        return { experience, level, maximalExperience };
    }

    render() {
        const { name, avatar } = this.props;
        const { experience, level, maximalExperience } = this.calculateProgress();
        const widthValue = (experience / maximalExperience) * 100;

        return (
            <div className="player__wrapper">
                <div className="player__name text-center">
                    <b>{name}</b>
                </div>
                <div className="player__image">
                    <img src={`/male-avatar/${avatar}.png`} alt={name}/>
                </div>
                <div className="player__level text-center">
                    <b>úroveň {level}</b>
                </div>
                <div className="player__exp">
                    <div className="player__exp-value" style={{ width: `${widthValue}%` }}></div>
                </div>
                <div className="player__experience text-center">{experience} / {maximalExperience}</div>
            </div>
        );
    }
}
