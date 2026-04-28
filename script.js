const maleNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];

const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
];

function getAkanName() {
  const dateOfBirth = document.getElementById("dob").value;
  const gender = document.getElementById("gender").value;

  if (!dateOfBirth || !gender) {
    alert("Please enter your date of birth and select your gender.");
    return;
  }
}

const date = new Date(dateOfBirth);
const dayIndex = date.getDay(); // 0 (Sunday) to 6 (Saturday)

let akanName;

if (gender === "male") {
  akanName = maleNames[dayIndex];
} else if (gender === "female") {
  akanName = femaleNames[dayIndex];
}

const result = document.getElementById("result");
result.innerHTML = `Your Akan name is: <strong>${akanName}</strong>;`

console.log("Button clicked");
  
