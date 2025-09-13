// Array to hold attendance data
let attendance = [];

function markAttendance(name) {
    let entry = {
        student: name,
        time: new Date().toLocaleString()
    };

    attendance.push(entry);
    renderTable();
}

function renderTable() {
    let table = document.getElementById("attendanceTable");
    table.innerHTML = ""; // clear old rows

    attendance.forEach(row => {
        table.innerHTML += `
          <tr>
            <td>${row.student}</td>
            <td>${row.time}</td>
          </tr>
        `;
    });
}
