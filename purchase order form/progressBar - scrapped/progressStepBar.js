// Function to handle moving to the next step
function nextStep(step) {
    // Hide current step
    document.getElementById(`formStep${step}`).style.display = "none";
  
    // Show next step
    document.getElementById(`formStep${step + 1}`).style.display = "block";
  
    // Update progress tracker
    document.getElementById(`step${step}`).classList.add("completed");
    if (step < 2) { // Only change the line for the first 2 steps
      document.getElementById(`line${step}`).style.backgroundColor = "#4CAF50";
    }
  }
  
  // Handle form submission
  document.getElementById("multiStepForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form submitted!");
  });
  