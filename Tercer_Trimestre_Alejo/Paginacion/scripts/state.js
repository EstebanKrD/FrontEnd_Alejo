const state = {
    users: [],
    page: 0,
    limit: 12,
    total: 0,
};

export function getState(key) {
    return state[key];
}

export function setState(key, newValue) {
    state[key] = newValue;
}