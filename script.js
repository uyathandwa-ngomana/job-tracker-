// 1. Select the elements from the HTML using their IDs
const companyInput = document.getElementById('company');
const roleInput = document.getElementById('role');
const locationInput = document.getElementById('location');
const dateInput = document.getElementById('date');
const statusInput = document.getElementById('status');
const addBtn = document.getElementById('add-btn');
const jobsContainer = document.getElementById('jobs-container');

// 2. Add a click event to the button
addBtn.addEventListener('click', function() {
    
    // Get the values from the input fields
    const company = companyInput.value;
    const role = roleInput.value;
    const location = locationInput.value;
    const date = dateInput.value;
    const status = statusInput.value;

    // 3. Simple Check: Don't add if fields are empty
    if (company === '' || role === '') {
        alert("Please enter at least the Company and Job Title.");
        return;
    }

    // 4. Create a new list item (li) for the job
    const li = document.createElement('li');

    // 5. Add the HTML content to the list item
    li.innerHTML = `
        <span class="job-title">${role} at ${company}</span>
        <div class="job-info">${location} | Applied on: ${date}</div>
        <div class="status-badge">${status}</div>
    `;

    // 6. Add the new job to the container on the page
    jobsContainer.appendChild(li);

    // 7. Clear the inputs so the user can add another job
    companyInput.value = '';
    roleInput.value = '';
    locationInput.value = '';
    dateInput.value = '';
});
