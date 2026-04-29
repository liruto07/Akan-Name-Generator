document.getElementById("akanForm").addEventListener("submit", function (e) {
  e.preventDefault();

    // Get values
    //number() converts string to number, so we can do range checks
  let day = Number(document.getElementById("day").value);
  let month = Number(document.getElementById("month").value);
  let year = Number(document.getElementById("year").value);
  let gender = document.getElementById("gender").value;

  // Check if all fields are filled
  if (!day || !month || !year || !gender) {
    document.getElementById("result").innerHTML =
      "⚠️ Please fill in all fields!";
    return;
  }

  //  FIRST: Basic range validation (fix)
  if (day < 1 || day > 31 || month < 1 || month > 12) {
    document.getElementById("result").innerHTML =
      "⚠️ Please enter a valid date range!";
    return;
  }

  // Days in months
  let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Leap year check
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    daysInMonth[1] = 29;
  }

  //  NOW it's safe to use month
  if (day > daysInMonth[month - 1]) {
    document.getElementById("result").innerHTML =
      "❌ Invalid date for that month!";
    return;
  }

  // Create date
  let date = new Date(year, month - 1, day);

  // Strict validation
  let isValid =
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day;

  if (!isValid) {
    document.getElementById("result").innerHTML =
      "❌ Invalid date. That date does not exist!";
    return;
  }

  // Get day of week
  let d = date.getDay();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];

  let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  // Assign Akan name
  let akanName = gender === "male" ? maleNames[d] : femaleNames[d];

  // Display result
  document.getElementById("result").innerHTML =
    `🎉 You were born on <b>${days[d]}</b>.<br>
     Your Akan name is <b>${akanName}</b> ✨`;
});
