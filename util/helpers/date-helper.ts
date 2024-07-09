/**
 * Converts a Date Object to a UNIX timestamp
 */
export const convertDateToUnixTimestamp = (date: Date) => {
  return Math.floor(date.getTime() / 1000);
};

/**
 * Converts a UNIX timestamp to a Date
 */
export const convertUnixTimestampToDate = (unixTimestamp: any) => {
  const milliseconds = unixTimestamp * 1000;
  return new Date(milliseconds).toLocaleDateString();
};
