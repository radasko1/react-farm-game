import './ProgressBar.css';

interface ProgressBarProps {
    title: string;
    value: number;
    maxValue: number;
    showValue?: boolean;
}
export function ProgressBar(props: ProgressBarProps) {
    const { value, maxValue, showValue = true } = props;

    const progressBarValue = (
        <div className="progress-bar__value">{ value } / { maxValue }</div>
    );

    return (
        <div className="progress-bar__wrapper">
            <div className="progress-bar__title">{props.title}</div>
            <div className="progress-bar__bar">
                <div
                    className="progress-bar__bar-value"
                    style={{ width: `${(value / maxValue) * 100}%` }}
                ></div>
            </div>
            { showValue && progressBarValue }
        </div>
    );
}