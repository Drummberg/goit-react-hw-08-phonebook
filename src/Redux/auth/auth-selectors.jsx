const getUsername = state => state.auth.user.name;

const isLoggedIn = state => state.auth.isLoggedIn;

const authSelectors = {
    getUsername,
    isLoggedIn
}

export default authSelectors;