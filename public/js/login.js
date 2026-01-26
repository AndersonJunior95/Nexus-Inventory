document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const passwordInput = document.getElementById("password");
  const toggleBtn = document.getElementById("togglePassword");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const emailValue = document.getElementById("email").value.trim();
      const passwordValue = document.getElementById("password").value.trim();

      const storedUser = JSON.parse(localStorage.getItem("nexus_registered_user"));

      if (!storedUser) {
        alert("Nenhum usuário cadastrado no sistema. Vá para a página de cadastro.");
        return;
      }

      if (emailValue === storedUser.email && passwordValue === storedUser.password) {
        const sessionUser = {
          user: storedUser.name,
          role: storedUser.role || "User",
          email: storedUser.email,
        };

        localStorage.setItem("nexus_user", JSON.stringify(sessionUser));
        
        window.location.href = "dashboard.html";
      } else {
        alert("E-mail ou senha incorretos.");
      }
    });
  }

  if (toggleBtn && passwordInput) {
    toggleBtn.addEventListener("click", () => {
      const isPassword = passwordInput.type === "password";
      passwordInput.type = isPassword ? "text" : "password";
      
      const iconSpan = toggleBtn.querySelector("span");
      if (iconSpan) {
        iconSpan.textContent = isPassword ? "visibility_off" : "visibility";
      }
    });
  }
});