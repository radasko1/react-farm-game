import moment from "moment";
import React, { Component } from 'react';
import { ProgressBar } from "../progress-bar/ProgressBar";
import { API } from "../../constants/api";
import { StatusTime } from "../../models/status.interface";


export class Status extends Component {
    private statusData: StatusTime | undefined;
    private timer: any;
    private updateTimer: any;
    public state = {
        totalTime: 100,
        remainingTime: 0,
        type: ''
    };

    componentDidMount() {
        this.fetchData().then((res) => {
            // assign values from fetch response
            if (!this.statusData) {
                return;
            }

            const data = this.statusData;
            // console.log('time:', data.now, 'now:', moment().unix());

            this.setState({ type: data.currentStatus.type, totalTime: data.currentStatus.to - data.currentStatus.from });
        });

        // update fetch data
        this.updateTimer = setInterval(this.fetchData.bind(this), 1 * 60 * 1000); // change 1 -> 2

        // without bind() I don't have access to 'statusData'
        this.timer = setInterval(this.checkForChanges.bind(this), 500);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        clearInterval(this.updateTimer);
    }

    async fetchData(): Promise<void> {
        try {
            const url = `${API.server}/time/status`;
            const response = await fetch(url);
            const json = await response.json();
            this.statusData = json;
        } catch (error) {
            console.log("error", error);
        }
    }

    checkForChanges() {
        if (!this.statusData) {
            return;
        }

        // console.log(this.statusData);

        // should be calibrated with fetch response
        const now = moment().unix();
        let untilTime = 0;

        // 'now' === 'from'
        if (now === this.statusData.currentStatus.from) {
            this.setState({
                type: this.statusData.currentStatus.type,
                totalTime: this.statusData.currentStatus.to - this.statusData.currentStatus.from
            });
        } else if (now === this.statusData.nextStatus.from) {
            this.setState({
                type: this.statusData.nextStatus.type,
                totalTime: this.statusData.nextStatus.to - this.statusData.nextStatus.from
            });
        }

        // need to get data from actual status object
        if (now >= this.statusData.currentStatus.from && now <= this.statusData.currentStatus.to) {
            untilTime = this.statusData.currentStatus.to;
        } else if (now >= this.statusData.nextStatus.from && now <= this.statusData.nextStatus.to) {
            untilTime = this.statusData.nextStatus.to;
        }

        // calculate 'remainingTime'
        this.setState({ remainingTime: untilTime - now });
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