const todayDate = new Date();
const finishDate = new Date("2025/03/24/00:00:00");
function remainingDay() {
  const timeDiffernce = finishDate - todayDate;
  const dayDifference = timeDiffernce / (1000 * 60 * 60 * 24);
  return Math.ceil(dayDifference);
}

console.log(remainingDay());
document.getElementById("remainingDays").textContent = remainingDay();
