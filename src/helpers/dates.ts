import { format, parseISO } from "date-fns";

const checkLength = (num: number) => {
    return num.toString().length;
}

export const dateStringToTimestamp = (dateString: string) => parseISO(dateString).getTime();

export const timestampToDateStringISO = (timestamp: number) => {
    const date = new Date(timestamp);

    const hour = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()

    const stringMonth = checkLength(month) === 2 ? month + 1 : month + 1 === 10 ? `${month + 1}` : `0${month + 1}`;
    const stringDay = checkLength(day) === 2 ? day : `0${day}`;
    const stringHour = checkLength(hour) === 2 ? hour : `0${hour}`;
    const stringMinutes = checkLength(minutes) === 2 ? minutes : `0${minutes}`;
    const stringSeconds = checkLength(seconds) === 2 ? seconds : `0${seconds}`;

    const string = `${year}-${stringMonth}-${stringDay} ${stringHour}:${stringMinutes}:${stringSeconds}`;
    return string;
  };

export const dateStringToDateFormat = (dateString: string) => format(parseISO(dateString), 'LL/dd/uuuu');

export const todayDateString = () => {
    const date = new Date();

    const hour = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()

    const stringMonth = checkLength(month) === 2 ? month + 1 : `0${month + 1}`;
    const stringDay = checkLength(day) === 2 ? day : `0${day}`;
    const stringHour = checkLength(hour) === 2 ? hour : `0${hour}`;
    const stringMinutes = checkLength(minutes) === 2 ? minutes : `0${minutes}`;
    const stringSeconds = checkLength(seconds) === 2 ? seconds : `0${seconds}`;

    const today = `${year}-${stringMonth}-${stringDay} ${stringHour}:${stringMinutes}:${stringSeconds}`;
    return today;
}