import React, { Component } from 'react'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { ThemeContext } from '../context/Theme';
import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';


const styles = {
  dark: {
    background: '#5C7080',
  },
  light: {
    background: '#f5f5f5',
  },
};

export class Main extends Component {

  static contextType = ThemeContext;

  render() {
    console.log(this.context);
    return (
      <>
        <Header />
        <main style={styles[this.context.mode]} className={`bp3-${this.context.mode}`}>
          <section>
            <Content />
          </section>
        </main>
        <Footer />
      </>
    )
  }
}

export default Main
