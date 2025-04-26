document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signup-form");
    const message = document.getElementById("signup-message");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const confirmPassword = document.getElementById("confirm-password").value.trim();
  
      if (!name || !email || !password || !confirmPassword) {
        showMessage("❌ Заповніть усі поля.", "error");
        return;
      }
  
      if (!validateEmail(email)) {
        showMessage("❌ Невірний формат email.", "error");
        return;
      }
  
      if (password.length < 6) {
        showMessage("❌ Пароль має бути мінімум 6 символів.", "error");
        return;
      }
  
      if (password !== confirmPassword) {
        showMessage("❌ Паролі не співпадають.", "error");
        return;
      }
  
      const users = JSON.parse(localStorage.getItem("users")) || [];
  
      if (users.some(user => user.email === email)) {
        showMessage("❌ Такий email вже зареєстрований.", "error");
        return;
      }
  
      const newUser = { name, email, password };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("currentUser", JSON.stringify(newUser));
  
      showAnimation("✅ Реєстрація успішна... Перенаправлення");
      setTimeout(() => window.location.href = "Main.html", 2000);
    });
  
    function showMessage(text, type) {
      message.textContent = text;
      message.className = `message ${type}`;
    }
  
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  });
  
  function showAnimation(text) {
    const overlay = document.getElementById("overlay-animation");
    const animText = document.getElementById("animation-text");
    animText.textContent = text;
    overlay.classList.add("active");
  }
  