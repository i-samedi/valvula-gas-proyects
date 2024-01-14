fetch('MOCK_DATA_3.json')
    .then(response => response.json())
    .then(data => {
        // Obtener la referencia a la tabla
        const tableBody = document.querySelector('#json-table tbody');

        // Generar las filas de la tabla
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                        <td>${item.Id}</td>
                        <td>${item.MQ6}</td>
                        <td>${item.Fecha}</td>
                        <td>${item.Hora}</td>
                    `;
            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });

fetch('MOCK_DATA_5.json')
    .then(response => response.json())
    .then(data => {
        // Obtener la referencia a la tabla
        const tableBody = document.querySelector('#json-table2 tbody');

        // Generar las filas de la tabla
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                        <td>${item.Id}</td>
                        <td>${item.MQ7}</td>
                        <td>${item.Fecha}</td>
                        <td>${item.Hora}</td>
                    `;
            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });

    fetch('mokaka.json')
    .then(response => response.json())
    .then(data => {
        // Obtener la referencia a la tabla
        const tableBody = document.querySelector('#json-table3 tbody');

        // Generar las filas de la tabla
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                        <td>${item.ID}</td>
                        <td>${item.FechaHora}</td>
                        <td>${item.Sensor}</td>
                        <td>${item.TipoGAs}</td>
                        <td>${item.Concentracion}</td>
                        <td>${item.DescripciondeAlerta}</td>
                    `;
            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });

    fetch('pene.json')
    .then(response => response.json())
    .then(data => {
        // Obtener la referencia a la tabla
        const tableBody = document.querySelector('#json-table4 tbody');

        // Generar las filas de la tabla
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                        <td>${item.Id}</td>
                        <td>${item.Temperatura}</td>
                        <td>${item.gasMQ6}</td>
                        <td>${item.gasMQ7}</td>
                    `;
            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });