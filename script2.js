document.querySelector(".task-button").addEventListener("click", function() {
    alert("Redirecting to your tasks...");
});
function updateDate() {
    const today = new Date();

    // Get date parts
    const day = today.getDate();
    const month = today.toLocaleString("en-US", { month: "long" }); // "December"
    const weekday = today.toLocaleString("en-US", { weekday: "short" }); // "Tue"

    // Update HTML
    document.getElementById("date-day").textContent = day;
    document.getElementById("date-weekday").textContent = `${weekday},`;
    document.getElementById("date-month").textContent = month;
}

// Call function on page load
updateDate();
