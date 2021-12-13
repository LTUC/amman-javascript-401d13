import React, { useContext } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { ThemeContext } from '../context/Theme';
import SiteForm from './SiteForm';


const styles = {
  dark: {
    background: '#5C7080',
  },
  light: {
    background: '#f5f5f5',
  },
};


export default function Main() {
  const theme = useContext(ThemeContext);

  return (
    <>
      <Header />
      <main style={styles[theme.mode]} className={`bp3-${theme.mode}`}>
        <section>
          <Content />
        </section>
        <section>
          <SiteForm />
        </section>
      </main>
      <Footer />
    </>
  )
}

