/**
 * Return time format in more readable version
 * @param seconds Time in seconds
 * @return String with readable time format 'mm:ss'
 */
export function formatTime(seconds: number): string {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;

    const timeMinutes = min < 10 ? `0${min}` : `${min}`;
    const timeSeconds = sec < 10 ? `0${sec}` : `${sec}`;

    return `${timeMinutes}:${timeSeconds}`;
}