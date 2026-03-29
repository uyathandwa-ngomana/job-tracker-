// 1. Select the elements
const companyInput = document.getElementById('company');
const roleInput = document.getElementById('role');
const locationInput = document.getElementById('location');
const dateInput = document.getElementById('date');
const statusInput = document.getElementById('status');
const addBtn = document.getElementById('add-btn');
const jobsContainer = document.getElementById('jobs-container');

// 2. Load jobs from LocalStorage when the page starts
window.onload = function() {
    const savedJobs = JSON.parse(localStorage.getItem('myJobs')) || [];
    savedJobs.forEach(job => displayJob(job));
};

// 3. Function to create the HTML and show the job on the page
function displayJob(jobData) {
    const li = document.createElement('li');
    
    // Create a CSS class name from the status (e.g., "Applied" -> "status-applied")
    const statusClass = `status-${jobData.status.toLowerCase()}`;

    li.innerHTML = `
        <div class="job-card-content">
            <span class="job-title">${jobData.role} at ${jobData.company}</span>
            <div class="job-info">${jobData.location} | Applied: ${jobData.date}</div>
            <div class="status-badge ${statusClass}">${jobData.status}</div>
        </div>
        <button class="delete-btn">Delete</button>
    `;

    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
        removeJobFromStorage(jobData.id);
    });

    jobsContainer.appendChild(li);
}


// 4. Click event to add a new job
addBtn.addEventListener('click', function() {
    const job = {
        id: Date.now(), // Unique ID for each job
        company: companyInput.value,
        role: roleInput.value,
        location: locationInput.value,
        date: dateInput.value,
        status: statusInput.value
    };

    if (job.company === '' || job.role === '') {
        alert("Please enter at least the Company and Job Title.");
        return;
    }

    displayJob(job); // Show on screen
    saveJobToStorage(job); // Save to memory

    // Clear inputs
    companyInput.value = '';
    roleInput.value = '';
    locationInput.value = '';
});

// 5. Helper function: Save a job to LocalStorage
function saveJobToStorage(job) {
    const jobs = JSON.parse(localStorage.getItem('myJobs')) || [];
    jobs.push(job);
    localStorage.setItem('myJobs', JSON.stringify(jobs));
}

// 6. Helper function: Remove a job from LocalStorage
function removeJobFromStorage(id) {
    let jobs = JSON.parse(localStorage.getItem('myJobs')) || [];
    jobs = jobs.filter(job => job.id !== id);
    localStorage.setItem('myJobs', JSON.stringify(jobs));
}
