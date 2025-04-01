
const schedule = [
  ["1.4.2025", "-", "A", "B", "C", "A", "B+C"],
  ["2.4.2025", "A", "B", "C", "A", "B", "C+A"],
  ["3.4.2025", "B", "C", "A", "B", "C", "A+B"],
  ["4.4.2025", "C", "A", "B", "C", "A", "B+C"],
  ["5.4.2025", "A", "B", "C", "A", "B", "C+A"],
  ["6.4.2025", "B", "C", "A", "B", "C", "A+B"],
  ["7.4.2025", "C", "A", "B", "C", "A", "B+C"],
  ["8.4.2025", "A", "B", "C", "A", "B", "C+A"],
  ["9.4.2025", "B", "C", "A", "B", "C", "A+B"],
  ["10.4.2025", "C", "A", "B", "C", "A", "B+C"],
  ["11.4.2025", "A", "B", "C", "A", "B", "C+A"],
  ["12.4.2025", "B", "C", "A", "B", "C", "A+B"],
  ["13.4.2025", "C", "A", "B", "C", "A", "B+C"],
  ["14.4.2025", "A", "B", "C", "A", "B", "C+A"],
  ["15.4.2025", "B", "C", "A", "B", "C", "A+B"],
  ["16.4.2025", "C", "A", "B", "C", "A", "B+C"],
  ["17.4.2025", "A", "B", "C", "A", "B", "C+A"],
  ["18.4.2025", "B", "C", "A", "B", "C", "A+B"],
  ["19.4.2025", "C", "A", "B", "C", "A", "B+C"],
  ["20.4.2025", "A", "B", "C", "A", "B", "C+A"],
  ["21.4.2025", "B", "C", "A", "B", "C", "A+B"],
  ["22.4.2025", "C", "A", "B", "C", "A", "B+C"],
  ["23.4.2025", "A", "B", "C", "A", "B", "C+A"],
  ["24.4.2025", "B", "C", "A", "B", "C", "A+B"],
  ["25.4.2025", "C", "A", "B", "C", "A", "B+C"],
  ["26.4.2025", "A", "B", "C", "A", "B", "C+A"],
  ["27.4.2025", "B", "C", "A", "B", "C", "A+B"],
  ["28.4.2025", "C", "A", "B", "C", "A", "B+C"],
  ["29.4.2025", "A", "B", "C", "A", "B", "C+A"],
  ["30.4.2025", "B", "C", "A", "B", "C", "A+B"]
];

const times = [
  "05:00 to 09:00",
  "09:00 to 13:00",
  "13:00 to 17:00",
  "17:00 to 21:00",
  "21:00 to Next 01:00",
  "Next 01:00 to 05:00"
];

function findShifts() {
  const group = document.getElementById("groupInput").value.trim().toUpperCase();
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (!group.match(/^[ABC]$/)) {
    resultDiv.textContent = "Please enter a valid group (A, B, or C).";
    return;
  }

  let output = "";
  schedule.forEach(entry => {
    const date = entry[0];
    entry.slice(1).forEach((val, i) => {
      if (val.includes(group)) {
        output += `${date} - ${times[i]}\n`;
      }
    });
  });

  resultDiv.textContent = output || "No shifts found for this group.";
}
