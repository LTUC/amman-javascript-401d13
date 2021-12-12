import React, { Component } from 'react'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { ThemeContext } from '../context/Theme';
import { SettingContext } from '../context/Site';

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
        <main style={styles[this.context.mode]}>
          {/* <main style={this.context.mode === 'dark' ? '.dark' : '.light'}> */}
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
