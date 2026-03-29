// 1. Select the elements from the HTML using their IDs
const companyInput = document.getElementById('company');
const roleInput = document.getElementById('role');
const locationInput = document.getElementById('location');
const dateInput = document.getElementById('date');
const statusInput = document.getElementById('status');
const addBtn = document.getElementById('add-btn');
const jobsContainer = document.getElementById('jobs-container');

// 2. Add a click event to the button
// [Previous variable selections stay the same]

addBtn.addEventListener('click', function() {
    const company = companyInput.value;
    const role = roleInput.value;
    const location = locationInput.value;
    const date = dateInput.value;
    const status = statusInput.value;

    if (company === '' || role === '') {
        alert("Please enter at least the Company and Job Title.");
        return;
    }

    const li = document.createElement('li');

    // 5. Add the HTML content AND a Delete Button
    li.innerHTML = `
        <div class="job-card-content">
            <span class="job-title">${role} at ${company}</span>
            <div class="job-info">${location} | Applied on: ${date}</div>
            <div class="status-badge">${status}</div>
        </div>
        <button class="delete-btn">Delete</button>
    `;

    // 6. Add the delete functionality to this specific button
    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
        li.remove(); // This removes the entire <li> from the page
    });

    jobsContainer.appendChild(li);

    // Clear inputs
    companyInput.value = '';
    roleInput.value = '';
    locationInput.value = '';
    document.getElementById('date').valueAsDate = new Date();
});
