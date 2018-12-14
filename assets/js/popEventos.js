function showEvents() {
    document.getElementById("tabela").innerHTML = `
        ${JSON.parse(jsonEventos).eventos.map((evento) => `
            <tr>
                <td>
                    <a class="lead text-dark" href="${evento.link}" target="_blank">
                        ${evento.evento}
                    </a>
                </td>
                <td>${evento.comunidade}</td>
                <td>${evento.city}</td>
                <td>${evento.data}</td>
            </tr>
        `).join("")}
    `
};

