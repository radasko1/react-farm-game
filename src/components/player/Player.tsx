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

export function Player(props: PlayerProps) {
    /**
     * Calculate player progress in game
     * @return Player current level and remaining experience to the next level
     */
    const calculateProgress = (): PlayerProgress => {
        let level = 0,
            maximalExperience = 0,
            experience = props.experience;

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

    const { experience, level, maximalExperience } = calculateProgress();

    return (
        <div className="player__wrapper">
            <div className="player__name text-center">
                <b>{props.name}</b>
            </div>
            <div className="player__image">
                <img src={`/male-avatar/${props.avatar}.png`} alt={props.name}/>
            </div>
            <div className="player__level text-center">
                <b>úroveň {level}</b>
            </div>
            <div className="player__exp">
                <div className="player__exp-value" style={{ width: `${(experience / maximalExperience) * 100}%` }}></div>
            </div>
            <div className="player__experience text-center">{experience} / {maximalExperience}</div>
        </div>
    );
}
