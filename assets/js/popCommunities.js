window.onload = function () {
    //alert("carregou");
    showCommunities();
};
function showCommunities() {
    // var listCommunities = JSON.parse(jsonCommunities).communities;

    document.getElementById("communities").innerHTML = `
${JSON.parse(jsonCommunities).communities.map((community) => `
<div class="card bg-dark community">
    <a href="${community.link}" target="_blank" class="text-white text-center">
        <img class="card-img" src="${community.image}" onerror="this.src='images/imgtransp.png'">
        <div class="card-img-overlay texto">
            <h2 class="card-title pt-4">${community.name}</h2>
            <p class="card-text">${community.city}</p>
        </div>
    </a>
</div>	
`).join("")}
`
}