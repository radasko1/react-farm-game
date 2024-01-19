import { PlayerLeveling } from '../../assets/leveling.const';
import './Player.css';
import { useEffect } from "react";
import { fetchFn } from "../../functions/fetch-post.fn";
import { GamePlayer } from "../../models/game-player.interface";
import { APP_ROUTES } from "../../constants/app-routes";
import { useAppDispatch } from "../../hooks/hooks";
import { updatePlayer } from "../../reducers/player.reducer";

interface PlayerProps {
    name: string;
    experience: number;
    avatar: string;
    money: number;
}

interface PlayerProgress {
    level: number;
    experience: number;
    maximalExperience: number;
}

export function PlayerContainer(props: PlayerProps) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        async function fetchData() {
            const playerInfo= await fetchFn<GamePlayer>(APP_ROUTES.PLAYER_BASE, "GET");
            if (!playerInfo) {
                return;
            }
            dispatch(updatePlayer(playerInfo));
        }
        fetchData();
    }, []);

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
        <div className="d-f ai-c">
            <div className="player__block p-8px bds-solid d-f ai-c player__block--avatar">
                <div className="player__name">
                    <b>{ props.name }</b>
                </div>
            </div>
            <div className="player__block d-f jc-c ai-c">
                <div className="player__money">${props.money}</div>
            </div>
            <div className="player__block">
                <div className="player__level">
                    <b>úroveň { level }</b>
                </div>
                <div className="player__exp">
                    <div className="player__exp-value"
                         style={ {width: `${ (experience / maximalExperience) * 100 }%`} }></div>
                </div>
                <div className="player__experience d-b ta-c">{ experience } / { maximalExperience }</div>
            </div>
        </div>
    );
}
