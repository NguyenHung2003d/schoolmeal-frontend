// utils/dateHelpers.ts

/**
 * Get the week number of the year for a given date
 * @param date - The date to get week number for (defaults to current date)
 * @returns Week number (1-53)
 */
export const getWeekNumber = (date: Date = new Date()): number => {
  const targetDate = new Date(date.getTime());
  targetDate.setHours(0, 0, 0, 0);
  
  // Thursday in current week decides the year
  targetDate.setDate(targetDate.getDate() + 3 - (targetDate.getDay() + 6) % 7);
  
  // January 4 is always in week 1
  const week1 = new Date(targetDate.getFullYear(), 0, 4);
  
  // Calculate full weeks to nearest Thursday
  return 1 + Math.round(((targetDate.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
};

/**
 * Get current month number (1-12)
 * @param date - The date to get month for (defaults to current date)
 * @returns Month number (1-12)
 */
export const getCurrentMonth = (date: Date = new Date()): number => {
  return date.getMonth() + 1;
};

/**
 * Get current year
 * @param date - The date to get year for (defaults to current date)
 * @returns Year number
 */
export const getCurrentYear = (date: Date = new Date()): number => {
  return date.getFullYear();
};

/**
 * Format date to Vietnamese day name
 * @param date - The date to format
 * @returns Vietnamese day name
 */
export const getVietnameseDayName = (date: Date): string => {
  const days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
  return days[date.getDay()];
};

/**
 * Format date to English day name
 * @param date - The date to format
 * @returns English day name
 */
export const getEnglishDayName = (date: Date): string => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[date.getDay()];
};

/**
 * Get dates for current week (Monday to Sunday)
 * @param date - Reference date (defaults to current date)
 * @returns Array of dates for the week
 */
export const getWeekDates = (date: Date = new Date()): Date[] => {
  const week = [];
  const startDate = new Date(date);
  
  // Get Monday of current week
  const day = startDate.getDay();
  const diff = startDate.getDate() - day + (day === 0 ? -6 : 1);
  startDate.setDate(diff);
  
  // Generate 7 days from Monday
  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);
    week.push(currentDate);
  }
  
  return week;
};

/**
 * Navigate to previous/next week
 * @param currentDate - Current reference date
 * @param direction - 'prev' or 'next'
 * @returns New date for the target week
 */
export const navigateWeek = (currentDate: Date, direction: 'prev' | 'next'): Date => {
  const newDate = new Date(currentDate);
  const daysToMove = direction === 'prev' ? -7 : 7;
  newDate.setDate(newDate.getDate() + daysToMove);
  return newDate;
};

/**
 * Format date range for display
 * @param startDate - Start date of range
 * @param endDate - End date of range
 * @returns Formatted date range string
 */
export const formatDateRange = (startDate: Date, endDate: Date): string => {
  const start = startDate.getDate();
  const end = endDate.getDate();
  const month = getCurrentMonth(startDate);
  const year = getCurrentYear(startDate);
  
  if (startDate.getMonth() === endDate.getMonth()) {
    return `${start}-${end} tháng ${month}, ${year}`;
  } else {
    return `${start} tháng ${month} - ${end} tháng ${getCurrentMonth(endDate)}, ${year}`;
  }
};