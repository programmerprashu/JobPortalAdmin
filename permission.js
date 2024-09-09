function filterHRPermissions() {
    const input = document.getElementById('hrSearch').value.toLowerCase();
    const rows = document.querySelectorAll('#permissionsTableBody tr');
    rows.forEach(row => {
        const name = row.cells[1].textContent.toLowerCase();
        row.style.display = name.includes(input) ? '' : 'none';
    });
}