
function loadLabs() {
    fetch('labs/beginner.json')
        .then(res => res.json())
        .then(data => {
            const labList = document.getElementById('lab-list');
            data.forEach((lab, index) => {
                const li = document.createElement('li');
                li.textContent = lab.title;
                li.className = 'cursor-pointer hover:text-yellow-400';
                li.onclick = () => {
                    document.getElementById('lab-instructions').innerHTML = `
                        <h3 class="text-xl font-bold mb-2">${lab.title}</h3>
                        <p>${lab.instructions}</p>
                    `;
                    currentLab = lab;
                };
                labList.appendChild(li);
            });
        });
}

function checkLabCompletion(userCommand) {
    if (userCommand === currentLab.command) {
        term.write('\r\n✅ Lab complete!');
        currentLab = null;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadLabs();
});
