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

    console.log("Dados importados", dashboardData);
    console.log("Elementos total: ", kpiTotalElements);

    console.log("Lista users: ", dashboardData.recentActivities);

    /* Renderização das tabelas */

    kpiInUseElements.textContent = dashboardData.kpis.totalAssets;
    kpiInUseElements.textContent = dashboardData.kpis.inUse;
    kpiMaintenanceElements.textContent = dashboardData.kpis.maintenance;
    kpiUsersElements.textContent = dashboardData.kpis.activeUsers;
    kpiTotalElements.textContent = dashboardData.kpis.totalAssets;

    /* Utilizando o MAP */

    activityListElement.innerHTML = "";

    const listHTML = dashboardData.recentActivities.map((activity) => {
        return `
            <div class="activity-item">
                <div class="avatar-placeholder soft-purple">
                    ${activity.user.charAt(0)}
                </div>
                <div class="activity-details">
                    <p>
                        <strong> ${activity.user}</strong>
                        ${activity.action}
                        <strong> ${activity.device}</strong>
                    </p>
                </div>
                <span class="status-pill ${activity.statusColor}">
                    ${activity.status}
                </span>
            </div>   
        `;
    }).join('');

    activityListElement.innerHTML = listHTML;
    console.log("Olha eles aí: ", activityListElement)

});
