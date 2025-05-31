
const term = new Terminal();
term.open(document.getElementById('terminal'));
term.write('$ ');

let input = '';
let commandHistory = [];
let currentLab = null;
let currentUserId = null;
let isProUser = true; // Change to false to test free-only gating

function saveCommandHistory() {
    if (currentUserId) {
        db.collection("users").doc(currentUserId).set({ history: commandHistory }, { merge: true });
    }
}

function loadUserSession(uid) {
    currentUserId = uid;
    db.collection("users").doc(uid).get().then(doc => {
        if (doc.exists && doc.data().history) {
            commandHistory = doc.data().history;
        }
    });
}

term.onKey(e => {
    const { key } = e;
    if (key === '\r') {
        term.write('\r\n');
        processCommand(input.trim());
        input = '';
        term.write('\r\n$ ');
    } else if (key === '\u007F') {
        if (input.length > 0) {
            term.write('\b \b');
            input = input.slice(0, -1);
        }
    } else {
        term.write(key);
        input += key;
    }
});

function processCommand(cmd) {
    commandHistory.push(cmd);
    saveCommandHistory();

    if (cmd === 'ls') {
        term.write('file1.txt  projects  notes.md');
    } else if (cmd.startsWith('mkdir')) {
        const name = cmd.split(' ')[1];
        term.write(`Directory '${name}' created.`);
    } else if (cmd === 'certify') {
        if (isProUser) {
            term.write('Launching Certification Lab...');
        } else {
            term.write('Upgrade to ShellCoach Pro to access certification labs.');
        }
    } else {
        term.write(`Command not found: ${cmd}`);
    }

    if (currentLab) {
        checkLabCompletion(cmd);
    }
}
