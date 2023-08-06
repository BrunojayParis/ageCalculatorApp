//function to calculate the days since your birthday
const datesForm = document.getElementById("datesForm");




datesForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const year = document.getElementById("year");
  const month = document.getElementById("month");
  const day = document.getElementById("day");
  const currentDate = new Date();
  const inputDate = new Date(year.value, month.value -1, day.value);
  calculateTimeDifference(currentDate, inputDate);

 
});

 //function to calculate the days since your birthday
 function calculateTimeDifference(current, input) {
 
    const timeDifferenceInMilliseconds = current - input;
  
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const millisecondsPerMonth = 30 * millisecondsPerDay; // Approximation
  
    const yearsDifference = Math.floor(timeDifferenceInMilliseconds / (millisecondsPerMonth * 12));
    const monthsDifference = Math.floor((timeDifferenceInMilliseconds % (millisecondsPerMonth * 12)) / millisecondsPerMonth);
    const daysDifference = Math.floor((timeDifferenceInMilliseconds % millisecondsPerMonth) / millisecondsPerDay);

    const resultDays = document.getElementById("r-day");
    const resultMonths = document.getElementById("r-month");
    const resultYears = document.getElementById("r-year");

    resultDays.innerHTML = daysDifference;
    resultMonths.innerHTML = monthsDifference;
    resultYears.innerHTML = yearsDifference;
  

    console.log(yearsDifference,"-", monthsDifference,"-", daysDifference);
  }