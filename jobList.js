document.addEventListener('DOMContentLoaded', () => {
    const jobs = [
        { id: 1, title: 'Software Engineer', company: 'ABC Corp', status: 'open' },
        { id: 2, title: 'Project Manager', company: 'XYZ Ltd', status: 'closed' },
        { id: 3, title: 'Data Analyst', company: 'Data Inc', status: 'open' },
        
    ];

    const jobsTableBody = document.getElementById('jobsTableBody');
    const jobFilter = document.getElementById('jobFilter');
    const statusFilter = document.getElementById('statusFilter');

    function renderJobs() {
        jobsTableBody.innerHTML = '';
        const filteredJobs = jobs.filter(job => {
            return (job.title.toLowerCase().includes(jobFilter.value.toLowerCase()) &&
                (statusFilter.value === '' || job.status === statusFilter.value));
        });

        filteredJobs.forEach(job => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <th scope="row">${job.id}</th>
                <td>${job.title}</td>
                <td>${job.company}</td>
                <td>${job.status.charAt(0).toUpperCase() + job.status.slice(1)}</td>
                <td>
                    <button class="btn btn-success btn-sm" ${job.status !== 'open' ? 'disabled' : ''}>Approve</button>
                </td>
            `;
            const approveButton = row.querySelector('button');
            approveButton.addEventListener('click', () => {
                job.status = 'closed';
                renderJobs();
            });
            jobsTableBody.appendChild(row);
        });
    }

    jobFilter.addEventListener('input', renderJobs);
    statusFilter.addEventListener('change', renderJobs);

    renderJobs();
});
