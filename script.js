document.getElementById("akanForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get values as numbers
  let day = Number(document.getElementById("day").value);
  let month = Number(document.getElementById("month").value);
  let year = Number(document.getElementById("year").value);
  let gender = document.getElementById("gender").value;

  // Basic validation
  if (!day || !month || !year || !gender) {
    alert("Please fill in all fields!");
    return;
  }

  if (day < 1 || day > 31 || month < 1 || month > 12) {
    alert("Please enter a valid date!");
    return;
  }

  // Extract century and year parts
  let CC = Math.floor(year / 100);
  let YY = year % 100;

  // Day-of-week calculation (stable version)
let date = new Date(year, month - 1, day);
let d = date.getDay();
  // Fix negative values
  if (d < 0) {
    d += 7;
  }

  d = Math.floor(d);

  // Days of the week
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Akan names
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

  // Assign name based on gender
  let akanName;

  if (gender === "male") {
    akanName = maleNames[d];
  } else {
    akanName = femaleNames[d];
  }

  // Show result nicely
  document.getElementById("result").innerHTML =
    `🎉 You were born on <b>${days[d]}</b>.<br>
     Your Akan name is <b>${akanName}</b> ✨`;
});
