document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const passwordInput = document.getElementById("password");
  const toggleBtn = document.getElementById("togglePassword");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      console.log("Email digitado: ", email);

      if (!email || !password) {
        alert("Por favor, preencha todas as informações");
        return;
      }

<<<<<<< HEAD
      /* Simulando alguns dados */

      const user = {
        user: "Sarah Jenkins",
        role: "Admin",
        email: email
      };

      localStorage.setItem('nexus_user', JSON.stringify(user));

      window.location.href = "dashboard.html";
    });

    if (toggleBtn && passwordInput) {
      toggleBtn.addEventListener("click", () => {
        const tipoAtual = passwordInput.getAttribute("type");
        const iconSpan = toggleBtn.querySelector("span");

        if (tipoAtual === "password") {
          passwordInput.setAttribute("type", "text");
          iconSpan.textContent = "visibility_off";
        } else {
          passwordInput.setAttribute("type", "password");
          iconSpan.textContent = "visibility";
        }
      });
    }
  }
=======
      window.location.href = "dashboard.html";
    });
  }

  if (toggleBtn && passwordInput) {
    toggleBtn.addEventListener("click", () => {
      const tipoAtual = passwordInput.getAttribute("type");
      const iconSpan = toggleBtn.querySelector("span");

      if (tipoAtual === "password") {
        passwordInput.setAttribute("type", "text");
        iconSpan.textContent = "visibility_off";
      } else {
        passwordInput.setAttribute("type", "password");
        iconSpan.textContent = "visibility";
      }
    });
  }

  
>>>>>>> d64332f6caddd37b70870bcdbe7faafbffefeb1b
});
