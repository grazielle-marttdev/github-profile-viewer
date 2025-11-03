export function renderProfile(userData, container) {
    container.innerHTML = `
    <div class="profile-card">
        <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
        <div class="profile-info">
        <h2>${userData.name}</h2>
        <p>${userData.bio || "Não possui bio cadastrada 😢."}</p>
        </div>
    </div>

    <div class="profile-counters">
        <div class="followers">
            <h4>👥 Seguidores</h4>
            <span>${userData.followers}</span>
        </div>
        <div class="following">
            <h4>👥 Seguindo</h4>
            <span>${userData.following}</span>
        </div>
    </div>
    `;
}