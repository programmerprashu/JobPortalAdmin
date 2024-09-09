        function filterAccess() {
            const input = document.getElementById('candidateSearch').value.toLowerCase();
            const rows = document.querySelectorAll('#accessTableBody tr');
            rows.forEach(row => {
                const name = row.cells[1].textContent.toLowerCase();
                row.style.display = name.includes(input) ? '' : 'none';
            });
        }
