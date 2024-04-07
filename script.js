//your JS code here. If required.
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission
  
  // Get form inputs
  const name = document.getElementById("name").value;
  const age = parseInt(document.getElementById("age").value);
  
  // Check if inputs are empty
  if (!name || !age) {
    alert("Please fill out all fields");
    return;
  }
  
  // Create a promise for form submission
  const submissionPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000); // Resolving after 4 seconds
  });
  
  // Handle promise resolution or rejection
  submissionPromise.then((message) => {
    alert(message);
  }).catch((message) => {
    alert(message);
  });
});