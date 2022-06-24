import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactForm from '../ContactForm/ContactForm';
import  Filter from '../Filter/Filter';
import  ContactList  from '../ContactList/ContactList';
import { Section, TitleH1 } from './App.styled';
import Navigation from '../Navigation/Navigation';

export function App() {

  const HomePage = lazy(() => import('../views/HomePage/HomePage'));
  const LoginPage = lazy(() => import('../views/LoginPage/LoginPage'));
  const RegisterPage = lazy(() => import('../views/RegisterPage/RegisterPage'));
  
  return (
    <>
      <Navigation />
       <Suspense fallback={<div>Loading...Please wait..</div>}>
      <Routes>
      <Route path="/" exact element={<HomePage />} />

        </Routes>
        </Suspense>

      {/* <Section>
        <TitleH1>Phonebook</TitleH1>
        <ContactForm />
      </Section>
      <Section>
        <TitleH1>Contacts</TitleH1>
        <Filter />
        <ContactList />
      </Section> */}
    </>
  );
}

export default App;
