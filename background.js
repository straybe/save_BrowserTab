// Recolecta los links de las p[aginas del navegador
document.getElementById('collectLinks').addEventListener('click', () => {
    chrome.tabs.query({}, function(tabs) {
        const urls = tabs.map(tab => tab.url);
        const linksList = document.getElementById('linksList');
        linksList.innerHTML = '';

        urls.forEach(url => {
            const listItem = document.createElement('li');
            listItem.textContent = url;
            linksList.appendChild(listItem);
        });
    });
});
