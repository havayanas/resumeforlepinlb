
  function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');

    if (username === 'leppy' && password === 'pinakagwapa') {
      sessionStorage.setItem('loggedIn', 'true');
      window.location.href = 'home.html';
    } else {
      errorMsg.textContent = 'Incorrect username or password.';
    }
  }

  // Listen for Enter key on both inputs
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      login();
    }
  });

