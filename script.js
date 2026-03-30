// 1. Select the elements from the HTML using their IDs
const companyInput = document.getElementById('company');
const roleInput = document.getElementById('role');
const locationInput = document.getElementById('location');
const dateInput = document.getElementById('date');
const statusInput = document.getElementById('status');
const addBtn = document.getElementById('add-btn');
const jobsContainer = document.getElementById('jobs-container');

// 2. Load jobs from LocalStorage when the page starts
window.onload = function() {
    // Set the date input to today's date automatically
    if (dateInput) dateInput.valueAsDate = new Date();
    
    // Retrieve saved jobs or start with an empty array
    const savedJobs = JSON.parse(localStorage.getItem('myJobs')) || [];
    
    // Loop through each saved job and display it on the page
    savedJobs.forEach(job => displayJob(job));
};

// 3. Function to create the HTML and show the job on the page
function displayJob(jobData) {
    // Create a new list item (li) for the job
    const li = document.createElement('li');
    
    // Create a CSS class name from the status (e.g., "Applied" -> "status-applied")
    const statusClass = `status-${jobData.status.toLowerCase()}`;

    // Add the HTML content to the list item
    li.innerHTML = `
        <div class="job-card-content">
            <span class="job-title">${jobData.role} at ${jobData.company}</span>
            <div class="job-info">${jobData.location} | Applied on: ${jobData.date}</div>
            <div class="status-badge ${statusClass}">${jobData.status}</div>
        </div>
        <button class="delete-btn">Delete</button>
    `;

    // 4. Add the delete functionality to this specific button
    li.querySelector('.delete-btn').addEventListener('click', function() {
        // Remove the card from the screen
        li.remove();
        // Remove the job from LocalStorage using its unique ID
        removeJobFromStorage(jobData.id);
    });

    // Add the new job to the container on the page
    jobsContainer.appendChild(li);
}

// 5. Click event to add a new job
// *** THIS IS THE LINE THAT WAS MISSING IN YOUR CODE ***
addBtn.addEventListener('click', function() {
    
    // Create a new job object with values from the form
    const job = {
        id: Date.now(), // Unique ID based on the current timestamp
        company: companyInput.value,
        role: roleInput.value,
        location: locationInput.value,
        date: dateInput.value,
        status: statusInput.value
    };

    // Simple Check: Don't add if main fields are empty
    if (job.company === '' || job.role === '') {
        alert("Please enter at least the Company and Job Title.");
        return;
    }

    // Show the job on the screen
    displayJob(job);
    
    // Save the job to LocalStorage memory
    saveJobToStorage(job);

    // Clear the inputs so the user can add another job
    companyInput.value = '';
    roleInput.value = '';
    locationInput.value = '';
    if (dateInput) dateInput.valueAsDate = new Date();
});

// 6. Helper function: Save a job to LocalStorage
function saveJobToStorage(job) {
    const jobs = JSON.parse(localStorage.getItem('myJobs')) || [];
    jobs.push(job);
    localStorage.setItem('myJobs', JSON.stringify(jobs));
}

// 7. Helper function: Remove a job from LocalStorage
function removeJobFromStorage(id) {
    let jobs = JSON.parse(localStorage.getItem('myJobs')) || [];
    // Filter out the job that matches the ID we want to delete
    jobs = jobs.filter(job => job.id !== id);
    // Save the updated list back to LocalStorage
    localStorage.setItem('myJobs', JSON.stringify(jobs));
}
