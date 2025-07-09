document.querySelector(".calculate-age").addEventListener("click", (event) => {
  event.preventDefault();

  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;

  const resultYear = document.getElementsByClassName("result-year")[0];
  const resultMonth = document.getElementsByClassName("result-month")[0];
  const resultDate = document.getElementsByClassName("result-day")[0];

  const invalidDateError =
    document.getElementsByClassName("invalid-date-error")[0];

  const birthDate = new Date(`${year}-${month}-${day}`);

  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  console.log(new Date(birthDate));

  const dayError = document.getElementsByClassName("day-error")[0];
  const monthError = document.getElementsByClassName("month-error")[0];
  const yearError = document.getElementsByClassName("year-error")[0];

  const dayInput = document.getElementById("day");
  const dayLabel = document.getElementById("day-label");
  const monthInput = document.getElementById("month");
  const monthLabel = document.getElementById("month-label");
  const yearInput = document.getElementById("year");
  const yearLabel = document.getElementById("year-label");

  resultYear.innerHTML = "--";
  resultMonth.innerHTML = "--";
  resultDate.innerHTML = "--";

  let hasError = false;

  if (day === "") {
    dayError.innerHTML = "This feild is requied";
    dayInput.classList.remove("border-gray-300");
    dayInput.classList.add("border-[#ff5757]");
    dayLabel.classList.remove("text-gray-500");
    dayLabel.classList.add("text-[#ff5757]");
    hasError = true;
  } else if (day < 1 || day > 31) {
    dayError.innerHTML = "Must be a valid day";
    dayInput.classList.remove("border-gray-300");
    dayInput.classList.add("border-[#ff5757]");
    dayLabel.classList.remove("text-gray-500");
    dayLabel.classList.add("text-[#ff5757]");
    hasError = true;
  } else {
    dayError.innerHTML = "";
    dayInput.classList.add("border-gray-300");
    dayInput.classList.remove("border-[#ff5757]");
    dayLabel.classList.add("text-gray-500");
    dayLabel.classList.remove("text-[#ff5757]");
  }

  if (month === "") {
    monthError.innerHTML = "This feild is requied";
    monthInput.classList.remove("border-gray-300");
    monthInput.classList.add("border-[#ff5757]");
    monthLabel.classList.remove("text-gray-500");
    monthLabel.classList.add("text-[#ff5757]");
    hasError = true;
  } else if (month < 1 || month > 12) {
    monthError.innerHTML = "Must be a valid month";
    monthInput.classList.remove("border-gray-300");
    monthInput.classList.add("border-[#ff5757]");
    monthLabel.classList.remove("text-gray-500");
    monthLabel.classList.add("text-[#ff5757]");
    hasError = true;
  } else {
    monthError.innerHTML = "";
    monthInput.classList.add("border-gray-300");
    monthInput.classList.remove("border-[#ff5757]");
    monthLabel.classList.add("text-gray-500");
    monthLabel.classList.remove("text-[#ff5757]");
  }

  if (year === "") {
    yearError.innerHTML = "This feild is requied";
    yearInput.classList.remove("border-gray-300");
    yearInput.classList.add("border-[#ff5757]");
    yearLabel.classList.remove("text-gray-500");
    yearLabel.classList.add("text-[#ff5757]");
    hasError = true;
  } else if (year < 1000) {
    yearError.innerHTML = "Must be a valid year";
    yearInput.classList.remove("border-gray-300");
    yearInput.classList.add("border-[#ff5757]");
    yearLabel.classList.remove("text-gray-500");
    yearLabel.classList.add("text-[#ff5757]");
    hasError = true;
  } else if (year > today.getFullYear()) {
    yearError.innerHTML = "Must be in the past";
    yearInput.classList.remove("border-gray-300");
    yearInput.classList.add("border-[#ff5757]");
    yearLabel.classList.remove("text-gray-500");
    yearLabel.classList.add("text-[#ff5757]");
    hasError = true;
  } else {
    if (month > today.getMonth()) {
      monthError.innerHTML = "Must be a valid month";
      monthInput.classList.remove("border-gray-300");
      monthInput.classList.add("border-[#ff5757]");
      monthLabel.classList.remove("text-gray-500");
      monthLabel.classList.add("text-[#ff5757]");
      hasError = true;
    } else {
      yearError.innerHTML = "";
      yearInput.classList.add("border-gray-300");
      yearInput.classList.remove("border-[#ff5757]");
      yearLabel.classList.add("text-gray-500");
      yearLabel.classList.remove("text-[#ff5757]");
    }
  }

  if (hasError) return;

  if (new Date(birthDate)) {
    resultYear.innerHTML = years;

    if (Math.abs(months).toString().length < 3) {
      resultMonth.innerHTML = "0" + months;
    } else {
      resultMonth.innerHTML = months;
    }

    if (Math.abs(days).toString().length < 2) {
      resultDate.innerHTML = "0" + days;
    } else {
      resultDate.innerHTML = days;
    }
  } else {
    invalidDateError.innerHTML = "Invalid Date";
  }
});
