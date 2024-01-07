import React, { Component } from 'react';
import { PlayerNeedProps } from "./player-need-props.interface";
import './ProgressBar.css';

export class ProgressBar extends Component<PlayerNeedProps> {
    render() {
        const { title, value, maxValue, showValue = true } = this.props;
        const barWidth = (value / maxValue) * 100;

        const progressBarValue = (
            <div className="progress-bar__value">{ value } / { maxValue }</div>
        );

        return (
            <div className="progress-bar__wrapper">
                <div className="progress-bar__title">{title}</div>
                <div className="progress-bar__bar">
                    <div className="progress-bar__bar-value" style={{ width: `${barWidth}%` }}></div>
                </div>
                { showValue ? progressBarValue : null }
            </div>
        );
    }
}