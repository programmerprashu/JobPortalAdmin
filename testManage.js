function filterCandidates() {
    const input = document.getElementById('candidateFilter').value.toLowerCase();
    const rows = document.querySelectorAll('#scoresTableBody tr');
    rows.forEach(row => {
        const name = row.cells[1].textContent.toLowerCase();
        row.style.display = name.includes(input) ? '' : 'none';
    });
}
