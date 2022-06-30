import React from 'react';
import { H1 } from './HomePage.styled';
import connection from '../../image/connection.svg'

const HomePage = () => {
  return (
    <><H1>Welcome in Contacts-Book!;)</H1><img src={connection} alt='Contact' width={300}></img></>
  )
    
   
};

export default HomePage;