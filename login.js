document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente
  
    // Obtener los valores de usuario y contraseña ingresados
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Validar el inicio de sesión usando sheets.best (ejemplo ficticio)
    validarLogin(username, password)
      .then(function (response) {
        if (response.success) {
          // Inicio de sesión exitoso, redireccionar a la página principal
          window.location.href = 'mi_valvula.html';
        } else {
          // Mostrar mensaje de error
          alert('Credenciales inválidas. Intente nuevamente.');
        }
      })
      .catch(function (error) {
        // Mostrar mensaje de error
        alert('Ocurrió un error al validar el inicio de sesión.');
        console.error(error);
      });
  });
  
  function validarLogin(username, password) {
    return fetch('https://sheet.best/api/sheets/e0acf98e-4110-4009-b855-2c795171a33c', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer your_access_token'
      }
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Error al obtener los datos de las credenciales');
        }
        return response.json();
      })
      .then(function (data) {
        // Buscar las credenciales en los datos recibidos
        var credentials = data.filter(function (row) {
          return row.Usuario === username && row.Contraseña === password;
        });
  
        if (credentials.length > 0) {
          return { success: true }; // Inicio de sesión válido
        } else {
          return { success: false }; // Inicio de sesión inválido
        }
      })
      .catch(function (error) {
        console.error(error);
        return { success: false }; // Error al validar el inicio de sesión
      });
  }
  