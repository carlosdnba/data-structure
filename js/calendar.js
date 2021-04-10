// Script to print a calendar of the current year on the console
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const currentYear = new Date().getFullYear();

console.log(`=========== Calendar of ${currentYear} ===========\n`);

for (let m = 0; m < months.length; m++) {
  const month = months[m];

  console.log(`Month: ${month}\n`);
  console.log(`SUN MON TUE WED THU FRI SAT\n`);

  let daysString = '';

  const emptySpace = '   ';

  for (let d = 1; d <= 31; d++) {
    const date = new Date(currentYear, m, d);
    console.log(date.getDate());
  }
}
