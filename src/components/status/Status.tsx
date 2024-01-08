import React, { Component } from 'react';
import { ProgressBar } from "../progress-bar/ProgressBar";
import { StatusState } from "./status-state.interface";
import { PrisonTimeWorker } from "../../models/prison-tyme-worker.interface";

export class Status extends Component<{}, StatusState> {
    state: Readonly<StatusState> = {
        type: '',
        remainingTime: 0,
        totalTime: 100,
        startDate: new Date(),
        finishDate: new Date(),
    };

    private timeWorker: Worker | undefined = undefined;
    private timer: NodeJS.Timer | undefined = undefined;

    componentDidMount() {
        this.timeWorker = new Worker("prison-time.js");
        this.timeWorker.onmessage = (e) => {
            const data = e.data as PrisonTimeWorker;

            let type = '';
            if (data.type === "cell") {
                type = 'Vězení';
            } else if (data.type === "break") {
                type = 'Přestávka';
            }

            // first get data, then assign in state
            this.setState({
                startDate: data.startDate,
                finishDate: data.finishDate,
                type: type,
            })
        }

        this.timer = setInterval(this.updateTime.bind(this), 200);
    }

    componentWillUnmount() {
        this.timeWorker?.terminate();
        clearInterval(this.timer);
    }

    updateTime() {
        const startTimestamp = Math.floor(this.state.startDate.getTime() / 1000);
        const finishTimestamp = Math.floor(this.state.finishDate.getTime() / 1000);
        const currentTimestamp = Math.floor(new Date().getTime() / 1000);

        this.setState({
            totalTime: finishTimestamp - startTimestamp,
            remainingTime: finishTimestamp - currentTimestamp
        });

        // TODO:prevent same value, is this handled in state?
    }

    render() {
        return (
            <ProgressBar
                title={this.state.type}
                value={this.state.remainingTime}
                maxValue={this.state.totalTime}
                showValue={false}
            />
        );
    }
}