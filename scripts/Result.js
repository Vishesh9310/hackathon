const results = [
    { collegeId: "101", name: "Vishesh", course: "BCA", semester: "1", marks: "85%" },
    { collegeId: "102", name: "Pallavi", course: "B.Tech", semester: "2", marks: "78%" },
    { collegeId: "103", name: "Neha", course: "MBA", semester: "3", marks: "90%" }
];

const form = document.getElementById("resultForm");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const collegeId = document.getElementById("collegeId").value.trim();
    const stdName = document.getElementById("stdName").value.trim();
    const course = document.getElementById("course").value;
    const semester = document.getElementById("semester").value;

    const student = results.find(
        r => r.collegeId === collegeId &&
            r.name.toLowerCase() === stdName.toLowerCase() &&
            r.course === course &&
            r.semester === semester
    );

    if (student) {
        resultDiv.style.display = "block";
        resultDiv.innerHTML = `
          <h3>Result Found ✅</h3>
          <p><strong>Name:</strong> ${student.name}</p>
          <p><strong>College ID:</strong> ${student.collegeId}</p>
          <p><strong>Course:</strong> ${student.course}</p>
          <p><strong>Semester:</strong> ${student.semester}</p>
          <p><strong>Marks:</strong> ${student.marks}</p>
        `;
    } else {
        resultDiv.style.display = "block";
        resultDiv.innerHTML = `<p style="color:red;">❌ No result found for entered details.</p>`;
    }
});