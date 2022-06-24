import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../../Redux/auth/auth-operations';

const initialState = {
  name: '',
  email: '',
  password: '',
};

export default function RegisterPage() {
    const dispatch = useDispatch();
    const [user, setUser] = useState(initialState);
    

    const handleChange = ({ target: { name, value } }) => {
        setUser(prevUser => ({
            ...prevUser,
            [name]: value,
        }))
    };

    const handleSubmit = event => {
        event.preventDefault();
    dispatch(authOperations.register(user));
    setUser(initialState);
  };
} 