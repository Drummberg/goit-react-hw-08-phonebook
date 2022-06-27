const getUsername = state => state.auth.user.name;
const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;
const isLoggedIn = state => state.auth.isLoggedIn;

const authSelectors = {
    getUsername,
    isLoggedIn,
    getIsFetchingCurrent
}

export default authSelectors;