const getUsername = state => state.auth.user.name;
const getIsRefresh = state => state.auth.isRefresh;
const isLoggedIn = state => state.auth.isLoggedIn;

const authSelectors = {
    getUsername,
    isLoggedIn,
    getIsRefresh
}

export default authSelectors;