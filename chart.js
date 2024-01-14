        // Datos del archivo JSON
        const data = [
            {
              "Id": 1,
              "Temperatura": 25,
              "gasMQ6": 20,
              "gasMQ7": 80
            },
            {
              "Id": 2,
              "Temperatura": 20,
              "gasMQ6": 32,
              "gasMQ7": 100
            },
            {
              "Id": 3,
              "Temperatura": 30,
              "gasMQ6": 40,
              "gasMQ7": 90
            },
            {
              "Id": 4,
              "Temperatura": 22,
              "gasMQ6": 25,
              "gasMQ7": 200
            },
            {
              "Id": 5,
              "Temperatura": 28,
              "gasMQ6": 36,
              "gasMQ7": 110
            }
          ];
          
              

        // Obtener los valores del archivo JSON
        const ids = data.map(entry => entry.Id);
        const temperaturas = data.map(entry => entry.Temperatura);
        const gasMQ6 = data.map(entry => entry.gasMQ6);
        const gasMQ7 = data.map(entry => entry.gasMQ7);

        // Configurar los datos del gráfico
        const chartData = {
            labels: ids,
            datasets: [
                {
                    label: 'Temperatura',
                    data: temperaturas,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                },
                {
                    label: 'gasMQ6',
                    data: gasMQ6,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    label: 'gasMQ7',
                    data: gasMQ7,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }
            ]
        };

        // Configurar opciones del gráfico
        const chartOptions = {
            responsive: true,
            maintainAspectRatio: false
        };

        // Crear el gráfico
        const canvas = document.getElementById('grafico');
        const ctx = canvas.getContext('2d');
        const chart = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: chartOptions
        });