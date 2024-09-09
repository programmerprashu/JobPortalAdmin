function filterHRHistory() {
    const input = document.getElementById('hrSearch').value.toLowerCase();
    const rows = document.querySelectorAll('#hrHistoryTableBody tr');
    rows.forEach(row => {
        const name = row.cells[1].textContent.toLowerCase();
        row.style.display = name.includes(input) ? '' : 'none';
    });
}