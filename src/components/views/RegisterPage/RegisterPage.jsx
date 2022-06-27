import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../../Redux/auth/auth-operations';
import { Title, Form, Label, Input, Button } from './RegisterPage.styled';


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
     <Form onSubmit={handleSubmit} >
        <Title>Register</Title>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={user.name}
            placeholder="Enter name"
            onChange={handleChange}
            />
        </Label>

        <Label>
          Email
          <Input
            type="email"
            name="email"
            value={user.email}
            placeholder="Enter email"
            onChange={handleChange}
            />
        </Label>

        <Label>
          Password
          <Input
            type="password"
            name="password"
            value={user.password}
            placeholder="Enter password"
            onChange={handleChange}
            />
        </Label>

        <Button type="submit">
          Register
        </Button>
      </Form>
    )
} 