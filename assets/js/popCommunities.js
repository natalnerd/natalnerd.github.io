function showCommunities() {
    document.getElementById("communities").innerHTML = `
        ${JSON.parse(jsonCommunities).communities.map((community) => `
            <div class="bg-dark imagem community">
                <a href="${community.link}" target="_blank" class="text-center">
                <img src="${community.image}" onerror="this.src='images/comunidades/imgtransp.png'">
                <div class="capa texto">
                    <h2 class="tituloCommunidade">${community.name}</h2>
                    <p>${community.city}</p>
                </div>
                </a>
            </div>
        `).join("")}
    `
};