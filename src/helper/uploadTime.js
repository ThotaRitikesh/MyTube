function uploadTime(publishedAt) {
  // Get the current time
  const currentTime = new Date();

  // Parse the publishedAt timestamp
  const publishedTime = new Date(publishedAt);

  // Calculate the time difference in seconds
  const timeDiff = Math.floor((currentTime - publishedTime) / 1000);

  // Calculate the time difference in years, months, weeks, days, hours, minutes, and seconds
  const years = Math.floor(timeDiff / (365 * 24 * 60 * 60));
  const months = Math.floor(timeDiff / (30 * 24 * 60 * 60));
  const weeks = Math.floor(timeDiff / (7 * 24 * 60 * 60));
  const days = Math.floor(timeDiff / (24 * 60 * 60));
  const hours = Math.floor(timeDiff / (60 * 60));
  const minutes = Math.floor(timeDiff / 60);
  const seconds = timeDiff;

  // Determine the appropriate time unit to display
  let timeUnit = "";
  let timeValue = 0;

  if (years > 0) {
    timeUnit = "year";
    timeValue = years;
  } else if (months > 0) {
    timeUnit = "month";
    timeValue = months;
  } else if (weeks > 0) {
    timeUnit = "week";
    timeValue = weeks;
  } else if (days > 0) {
    timeUnit = "day";
    timeValue = days;
  } else if (hours > 0) {
    timeUnit = "hour";
    timeValue = hours;
  } else if (minutes > 0) {
    timeUnit = "minute";
    timeValue = minutes;
  } else {
    timeUnit = "second";
    timeValue = seconds;
  }

  // Return the formatted time duration
  return `${timeValue} ${timeUnit}${timeValue !== 1 ? "s" : ""} ago`;
}

export default uploadTime;
