document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login-form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const message = document.getElementById("login-message");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
  
      const users = JSON.parse(localStorage.getItem("users")) || [];
  
      // Перевірка валідності
      if (!email || !password) {
        showMessage("❌ Заповніть усі поля.", "error");
        return;
      }
  
      const user = users.find(u => u.email === email && u.password === password);
  
      if (!user) {
        showMessage("❌ Невірний email або пароль.", "error");
      } else {
        localStorage.setItem("currentUser", JSON.stringify(user));
        showAnimation("✅ Вхід успішний... Перенаправлення");
        setTimeout(() => window.location.href = "Main.html", 2000);
      }
    });
  
    function showMessage(text, type) {
      message.textContent = text;
      message.className = `message ${type}`;
    }
  });
  
  function showAnimation(text) {
    const overlay = document.getElementById("overlay-animation");
    const animText = document.getElementById("animation-text");
    animText.textContent = text;
    overlay.classList.add("active");
  }
  