import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInAnonymously, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import firebaseConfig from './firebaseConfig.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const signIn = () => signInAnonymously(auth);
export const logout = () => signOut(auth);

export const setAuthListeners = (onLogin, onLogout) => {
    onAuthStateChanged(auth, (user) => {
        if (user) onLogin();
        else onLogout();
    });
};

export { auth };