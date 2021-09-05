export class DateTimeCoverter {
    timestampToDate = (timeStamp: number) => new Date(timeStamp).toLocaleTimeString();
}