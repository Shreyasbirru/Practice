document.addEventListener("DOMContentLoaded", function() {
    function getResult() {
        // Get all rows in the results table
        let rows = document.querySelectorAll("table tbody tr");

        rows.forEach(row => {
            let nameColumn = row.querySelector("td:first-child"); // First column contains the course name
            
            if (nameColumn && nameColumn.innerText.includes("Master of Computer Application (MCA)(2024 Pattern(NEP 2020)) Oct-2024")) {
                let button = row.querySelector("input[type='button']");
                if (button) {
                    console.log("Found the target row, clicking the button...");
                    button.click(); // Simulate button click
                } else {
                    console.error("Button not found in the target row.");
                }
            }
        });
    }

    // Wait for the page to fully load before executing
    setTimeout(getResult, 3000); // Delay to ensure the table loads properly
});
