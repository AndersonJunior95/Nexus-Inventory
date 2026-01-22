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
<<<<<<< HEAD
  const logoutBtn = document.querySelector(".logout-btn");
  const checkoutBtn = document.querySelector(".action-card.primary");
  const actionCards = document.querySelectorAll(".action-card:not(.primary):not(.dashed)");
  const rawData = localStorage.getItem('nexus_user');
  const user = JSON.parse(rawData);
  const welcomeName = document.querySelector(".welcome-text h2");
  const sidebarName = document.querySelector(".user-info strong");
  const currentHour = new Date().getHours();
=======
>>>>>>> d64332f6caddd37b70870bcdbe7faafbffefeb1b

  /* Renderização das tabelas */

  kpiInUseElements.textContent = dashboardData.kpis.totalAssets;
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

    const filteredActivities = dashboardData.recentActivities.filter((activity) => {
<<<<<<< HEAD
      return activity.user.toLowerCase().includes(searchTerm) ||
=======
        return activity.user.toLowerCase().includes(searchTerm) || 
>>>>>>> d64332f6caddd37b70870bcdbe7faafbffefeb1b
        activity.device.toLowerCase().includes(searchTerm);
    });
    renderActivities(filteredActivities);
  });
<<<<<<< HEAD

  /* Logout */
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      // Depois farei o logout com backend
      console.log("Encerrando a sessão...");
      window.location.href = "./index.html";
    })
  }

  /* Ações rápidas */

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      const assetTag = prompt("Digite a TAG do ativo que deseja retirar:");
      if (assetTag) {

        alert(`Ativo com TAG ${assetTag} retirado com sucesso!`);
        // Depois vou chamar a API para registrar a retirada
      } else {
        alert("Operação cancelada ou TAG inválida.");
      };
    })
  }

  /* Outras Ações */

  actionCards.forEach((card) => {
    card.addEventListener("click", () => {
      const acao = card.querySelector("strong").textContent

      const originalBg = card.style.backgroundColor;
      card.style.backgroundColor = "rgba(42, 109, 116, 0.05)";

      console.log("Ação selecionada:", acao);

      setTimeout(() => {
        card.style.backgroundColor = originalBg;
        alert(`A funcionalidade de ${acao} será implementada na fase de Backend!`);
      }, 200);
    });
  });

});
=======
});
>>>>>>> d64332f6caddd37b70870bcdbe7faafbffefeb1b
