import { users as seedUsers } from "@/data/users";
import { issues as seedIssues } from "@/data/issues";
import { currentUser as seedCurrentUser } from "@/data/currentUser";

const STORAGE_KEYS = {
    users: "communityHero:users",
    issues: "communityHero:issues",
    currentUser: "communityHero:currentUser",
};

export const AUTH_CHANGE_EVENT = "communityHero:auth-change";

function emitAuthChange() {
    window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
}

function readStorage(key, fallback) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
}

function writeStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getUsers() {
    return readStorage(STORAGE_KEYS.users, seedUsers);
}

export function saveUsers(users) {
    writeStorage(STORAGE_KEYS.users, users);
}

export function getIssues() {
    return readStorage(STORAGE_KEYS.issues, seedIssues);
}

export function saveIssues(issues) {
    writeStorage(STORAGE_KEYS.issues, issues);
}

export function getCurrentUser() {
    const value = sessionStorage.getItem(STORAGE_KEYS.currentUser);
    return value ? JSON.parse(value) : seedCurrentUser;
}

export function clearCurrentUser() {
    sessionStorage.removeItem(STORAGE_KEYS.currentUser);
    emitAuthChange();
}

export function saveCurrentUser(data) {
    sessionStorage.setItem(STORAGE_KEYS.currentUser, JSON.stringify(data));
    emitAuthChange();
}
