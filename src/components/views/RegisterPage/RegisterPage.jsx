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
    
    return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off" >
        <label>
          Имя
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            />
        </label>

        <label>
          Почта
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            />
        </label>

        <label>
          Пароль
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            />
        </label>

        <button type="submit">
          Регистрация
        </button>
      </form>
    </div>
    )
} 