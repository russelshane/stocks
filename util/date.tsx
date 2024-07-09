export const currentDate = new Date();

/**
 * Gets the previous year's date
 */
export const pastYearDate: Date = currentDate.setFullYear(
  currentDate.getFullYear() - 1
) as unknown as Date;
