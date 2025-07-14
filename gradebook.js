// TODO: Fetch date from the PostgreSQL database (to be implemented later)
function fetchGadeData() {
    // This function will quert the PostGreSQL datebase and return grade date
    console.log("Fetching grade data...");
}

//TODO: Populate the table with the grade date
function populateGradebook(data) {
    // This function will take the fetched grade data and populate the tables
    console.log("Populating grade book with data", data);
}

//TODO REMOVE THIS
// Call the stubs to demonstrate the workflow
const gradeData = fetchGradeData();
populateGradebook(gradeData);
//END REMOVE