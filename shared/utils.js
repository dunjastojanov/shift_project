const monthDays = {
  January: 31,
  February: 28,
  March: 31,
  April: 30,
  May: 31,
  June: 30,
  July: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31
};

export function getDaysInMonth(monthName) {
    const normalizedMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1).toLowerCase();
    return monthDays[normalizedMonth] || null;
}

export function getDays(numOfDays) {
  const days = Array(numOfDays).fill({ day: [], night: [] }).reduce((acc, item, index) => {
    acc[index + 1] = item;
    return acc;
  }, {});

  return Object.fromEntries(Object.entries(days).sort((a, b) => a[0] - b[0]));
}

export function generateCalendar(daysInMonth, firstDayOfWeek) {
  const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const result = {};

  for (let i = 0; i < daysOfWeek.length; i++) {
      result[daysOfWeek[i]] = [];
  }

  let currentDay = firstDayOfWeek;

  for (let day = 1; day <= daysInMonth; day++) {
      result[daysOfWeek[currentDay]].push(day);
      currentDay = (currentDay + 1) % 7;
  }

  return result;
}


