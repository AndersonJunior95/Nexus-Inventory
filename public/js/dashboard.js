document.addEventListener("DOMContentLoaded", () => {
  // Mockando os dados
  const dashboardData = {
    kpis: {
      totalAssets: 1240,
      inUse: 1054,
      maintenance: 45,
      activeUsers: 850,
    },

    recentActivities: [
      {
        user: "Ana Silva",
        action: "Retirou",
        device: "MacBook Pro M2",
        time: "Há 2 minutos",
        status: "Saída",
        statusColor: "blue",
      },
    ],
  };

  /* Seletores */

  const kpiTotalElements = document.getElementById("kpi-total-assets");
  const kpiInUseElements = document.getElementById("kpi-in-use");
  const kpiMaintenanceElements = document.getElementById("kpi-maintenance");
  const kpiUsersElements = document.getElementById("kpi-users");
  const activityListElement = document.getElementById("activity-list");
  const searchInput = document.getElementById("search-input");
  const logoutBtn = document.querySelector(".logout-btn");
  const checkoutBtn = document.querySelector(".action-card.primary");
  const actionCards = document.querySelectorAll(
    ".action-card:not(.primary):not(.dashed)",
  );
  const rawData = localStorage.getItem("nexus_user");
  const user = JSON.parse(rawData);
  const welcomeName = document.querySelector(".welcome-text h2");
  const sidebarName = document.querySelector(".user-info strong");
  const currentHour = new Date().getHours();
  const modalAction = document.getElementById("modal-action");
  const modalTitle = document.getElementById("modal-title");
  const formContent = document.getElementById("form-dynamic-content");
  const btnCancel = document.getElementById("btn-cancel");
  const closeModal = document.getElementById("close-modal");

  // Função para abrir o modal

  const hideModal = () => {
    modalAction.style.display = "none";
  };

  if (btnCancel) btnCancel.addEventListener("click", hideModal);
  if (closeModal) closeModal.addEventListener("click", hideModal);

  window.addEventListener("click", (e) => {
    if (e.target === modalAction) {
      hideModal();
    }
  });

  function openModal(type) {
    modalAction.style.display = "flex";
    formContent.innerHTML = "";

    switch (type.toLowerCase()) {
      case "check-out":
        modalTitle.textContent = "Realizar Empréstimo (Check-out)";
        formContent.innerHTML = `
        <label>TAG do Ativo</label>
        <input type="text" id="action-tag" placeholder="Ex: NX-2024" class="search-box" required style="width:100%; padding-left:15px;">
        <label>Colaborador</label>
        <input type="text" id="action-user" placeholder="Quem está retirando?" class="search-box" required style="width:100%; padding-left:15px;">
      `;
        break;

      case "check-in":
        modalTitle.textContent = "Devolução de Ativo (Check-in)";
        formContent.innerHTML = `
        <label>TAG do Ativo</label>
        <input type="text" id="action-tag" placeholder="Qual item está sendo devolvido?" class="search-box" required style="width:100%; padding-left:15px;">
        <label>Condição do Equipamento</label>
        <select class="search-box" style="width:100%; padding-left:10px;">
          <option value="bom">Em bom estado</option>
          <option value="danificado">Apresenta danos</option>
        </select>
      `;
        break;

      case "reportar":
        modalTitle.textContent = "Reportar Defeito";
        formContent.innerHTML = `
        <label>Equipamento/TAG</label>
        <input type="text" id="action-tag" placeholder="Identifique o ativo" class="search-box" required style="width:100%; padding-left:15px;">
        <label>Descrição do Problema</label>
        <textarea id="action-desc" placeholder="O que aconteceu?" class="search-box" required style="width:100%; height:80px; padding:10px;"></textarea>
      `;
        break;
    }
  }

  checkoutBtn.addEventListener("click", () => openModal("check-out"));

  actionCards.forEach((card) => {
    card.addEventListener("click", () => {
      const acao = card.querySelector("strong").textContent.trim();
      openModal(acao);
    });
  });

  document.getElementById("modal-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const title = modalTitle.textContent.toLowerCase();
    const actionTag = document.getElementById("action-tag")?.value || "N/A";
    const actionUser = document.getElementById("action-user")?.value || user.user;

    let acaoTexto, statusTexto, corPill;

    if (title.includes("check-out")) {
      acaoTexto = "retirou";
      statusTexto = "Saída";
      corPill = "blue";
    } else if (title.includes("check-in")) {
      acaoTexto = "devolveu";
      statusTexto = "Disponível";
      corPill = "green";
    } else {
      acaoTexto = "reportou defeito em";
      statusTexto = "Manutenção";
      corPill = "orange";
    }

    const novaAtividade = {
      user: actionUser,
      action: acaoTexto,
      device: actionTag,
      time: `${new Date().toLocaleTimeString()}`,
      status: statusTexto,
      statusColor: corPill
    };

    dashboardData.recentActivities.unshift(novaAtividade);
    renderActivities(dashboardData.recentActivities);

    // Fecha e limpa
    modalAction.style.display = "none";
    e.target.reset();
  });

  actionCards.forEach((card) => {
    card.addEventListener("click", () => {
      const acao = card.querySelector("strong").textContent;
      openModal(acao.toLowerCase());
    });
  });

  /* Verificando se o usuário existe */

  if (!rawData) {
    window.location.href = "./index.html";
    return;
  }

  let saudacao;

  switch (true) {
    case currentHour >= 5 && currentHour < 12:
      saudacao = "Bom dia";
      break;

    case currentHour >= 12 && currentHour < 18:
      saudacao = "Boa tarde";
      break;

    default:
      saudacao = "Boa noite";
      break;
  }

  /* Renderização das tabelas */

  if (user && welcomeName) {
    welcomeName.textContent = `${saudacao}, ${user.user.split(" ")[0]}!`;
  }
  kpiInUseElements.textContent = dashboardData.kpis.inUse;
  kpiMaintenanceElements.textContent = dashboardData.kpis.maintenance;
  kpiUsersElements.textContent = dashboardData.kpis.activeUsers;
  kpiTotalElements.textContent = dashboardData.kpis.totalAssets;

  /* Utilizando o MAP */

  function renderActivities(listItems) {
    activityListElement.innerHTML = "";

    if (listItems.length === 0) {
      activityListElement.innerHTML =
        '<div class="no-result">Nenhuma atividade encontrada.</div>';
      return;
    }

    const listHTML = listItems
      .map((activity) => {
        return `
            <div class="activity-item">
                <div class="avatar-placeholder soft-purple">
                    ${activity.user.charAt(0)}
                </div>
                <div class="activity-details">
                    <p>
                        <strong> ${activity.user} </strong>
                         ${activity.action}
                        <strong> ${activity.device}</strong>
                    </p>
                </div>
                <span class="status-pill ${activity.statusColor}">
                    ${activity.status}
                </span>
            </div>   
        `;
      })
      .join("");

    activityListElement.innerHTML = listHTML;
  }
  renderActivities(dashboardData.recentActivities);

  /* Filtro */

  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();

    const filteredActivities = dashboardData.recentActivities.filter(
      (activity) => {
        return (
          activity.user.toLowerCase().includes(searchTerm) ||
          activity.device.toLowerCase().includes(searchTerm)
        );
      },
    );
    renderActivities(filteredActivities);
  });

  /* Logout */
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("nexus_user");

      console.log("Sessão encerrada!");

      window.location.href = "./index.html";
    });
  }

  /* */
});
