import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import authSelectors from './auth-selectors';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('/users/signup', credentials);
        return data;
    } catch (error) {
        
    }
})

export default register;