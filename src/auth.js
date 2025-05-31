
function signIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then(result => {
        const user = result.user;
        document.getElementById('user-info').textContent = user.displayName;
    });
}

function signOut() {
    auth.signOut().then(() => {
        document.getElementById('user-info').textContent = '';
        location.reload();
    });
}

auth.onAuthStateChanged(user => {
    if (user) {
        document.getElementById('user-info').textContent = user.displayName;
        loadUserSession(user.uid);
    }
});
