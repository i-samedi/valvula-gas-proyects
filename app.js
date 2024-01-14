const apiKey = '%k1ksk7XCoS$_MdZdWguub96h2DqS3$LrnJy$n1O%%x6jiDyof-ecO%$$fMinnKP';
const fileId = 'Data-base';

fetch(`https://sheet.best/api/sheets/1621c702-c1e1-4170-8e18-e2dc3d035496`, {
  headers: {
    'X-API-KEY': apiKey,
  },
})
  .then(response => response.json())
  .then(data => generateTableFromExcel(data))
  .catch(error => console.error(error));

function generateTableFromExcel(excelData) {
  const table = document.getElementById('excel-table');

  excelData.forEach(row => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${row.ID}</td>
      <td>${row.NOMBRE}</td>
    `;
    table.querySelector('tbody').appendChild(newRow);
  });


  table.classList.add('table-fade-in');
}



