document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // не даємо формі перезавантажити сторінку
  
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');
  
    // Простий приклад валідації
    if (!email || !password) {
      errorMessage.textContent = "Please fill out all fields.";
    } else {
      errorMessage.textContent = "";
      alert(`Welcome back, ${email}!`);
      // Тут можна зробити перенаправлення або логіку входу
    }
  });
  