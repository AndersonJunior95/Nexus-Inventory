document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#register-form");
  const passwordUser = document.querySelector("#password");
  const confirmPassword = document.querySelectorAll(
    "input[type='password']",
  )[1];
  const toggleBtns = document.querySelectorAll("#togglePassword");

  const requirements = [
    { regex: /.{8,}/, text: "Pelo menos 8 caracteres" },
    { regex: /[A-Z]/, text: "Uma letra maiúscula" },
    { regex: /[a-z]/, text: "Uma letra minúscula" },
    { regex: /[0-9]/, text: "Um número" },
    { regex: /[$*&@#]/, text: "Um caractere especial ($*&@#)" },
  ];

  const requirementsList = document.createElement("ul");
  requirementsList.classList.add("password-requirements");

  requirements.forEach((req) => {
    const li = document.createElement("li");
    li.classList.add("requirement-item");
    li.innerHTML = `<span class="material-symbols-outlined icon-check">circle</span> ${req.text}`;
    requirementsList.appendChild(li);
    req.element = li;
  });

  if (passwordUser) {
    passwordUser.closest(".input-field").after(requirementsList);

    passwordUser.addEventListener("input", () => {
      requirements.forEach((req) => {
        const isValid = req.regex.test(passwordUser.value);
        const icon = req.element.querySelector(".icon-check");
        if (isValid) {
          req.element.classList.add("valid");
          icon.textContent = "check_circle";
        } else {
          req.element.classList.remove("valid");
          icon.textContent = "circle";
        }
      });
    });
  }

  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const input = btn.parentElement.querySelector("input");
      const icon = btn.querySelector("span");
      const isPassword = input.type === "password";
      input.type = isPassword ? "text" : "password";
      icon.textContent = isPassword ? "visibility_off" : "visibility";
    });
  });

  const modalOverlay = document.createElement("div");
  modalOverlay.classList.add("modal-overlay-custom");
  modalOverlay.innerHTML = `
    <div class="modal-box">
      <span id="modal-icon" class="material-symbols-outlined" style="font-size: 48px;">warning</span>
      <h2 id="modal-title" style="margin: 15px 0;">Erro no Cadastro</h2>
      <p id="modal-message"></p>
      <button type="button" id="closeModal">Entendi</button>
    </div>
  `;
  document.body.appendChild(modalOverlay);

  const showModal = (title, message, isSuccess = false) => {
    const icon = document.querySelector("#modal-icon");
    document.querySelector("#modal-title").textContent = title;
    document.querySelector("#modal-message").textContent = message;

    icon.textContent = isSuccess ? "check_circle" : "warning";
    icon.style.color = isSuccess ? "#10b981" : "#ff4d4d";

    modalOverlay.style.display = "flex";
  };

  document.querySelector("#closeModal").onclick = () =>
    (modalOverlay.style.display = "none");

  form.addEventListener("submit", (e) => {
    const isRequirementsValid = requirements.every((req) =>
      req.regex.test(passwordUser.value),
    );
    const passwordsMatch = passwordUser.value === confirmPassword.value;

    if (!isRequirementsValid) {
      e.preventDefault();
      showModal(
        "Senha Fraca",
        "A senha não atende a todos os requisitos de segurança.",
      );
    } else if (!passwordsMatch) {
      e.preventDefault();
      showModal(
        "Senhas Diferentes",
        "A confirmação de senha não coincide com a senha digitada.",
      );
    } else {
      e.preventDefault();

      const newUser = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        password: passwordUser.value,
        role: "User",
        avatar:
          "https://i.pravatar.cc/150?u=" + Math.floor(Math.random() * 1000),
      };

      localStorage.setItem("nexus_registered_user", JSON.stringify(newUser));

      showModal(
        "Sucesso!",
        "Conta criada com sucesso. Redirecionando para o login...",
        true,
      );

      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
    }
  });
});
