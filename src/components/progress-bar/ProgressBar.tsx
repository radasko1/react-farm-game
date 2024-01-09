import './ProgressBar.css';

interface ProgressBarProps {
    title: string;
    value: number;
    maxValue: number;
    showValue?: boolean;
}

export function ProgressBar(props: ProgressBarProps) {
    const { value, maxValue, showValue = true } = props;

    // TODO: can be re-rendered only this part of code?
    const progressBarValue = (
        <div className="progress-bar__description">{`${value} / ${maxValue}`}</div>
    );

    return (
        <div className="progress-bar">
            <div className="progress-bar__title">{props.title}</div>
            <div className="progress-bar__content">
                <div
                    className="progress-bar__value-box"
                    style={{ width: `${(value / maxValue) * 100}%` }}
                ></div>
            </div>
            { showValue && progressBarValue }
        </div>
    );
}