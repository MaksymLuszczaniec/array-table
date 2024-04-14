function generateTable() {
  const companies = [
    ["Saab AB", "Stockholm", 1937],
    ["Volvo Group", "Göteborg", 1927],
    ["Sandvik AB", "Stockholm", 1862],
    ["Atlas Copco Group", "Nacka", 1873],
    ["Electrolux AB", "Stockholm", 1919],
    ["Skanska AB", "Stockholm", 1887],
  ];

  const table = document.createElement('table');
  table.innerHTML = `
    <tr>
      <td>Firma</td>
      <td>City</td>
      <td>Year</td>
    </tr>
  `;

  companies.forEach(company => {
    const row = document.createElement('tr');
    company.forEach(data => {
      const cell = document.createElement('td');
      cell.textContent = data;
      row.appendChild(cell);
    });
    table.appendChild(row);
  });

  const container = document.getElementById('table-container');
  container.innerHTML = '';
  container.appendChild(table);
}