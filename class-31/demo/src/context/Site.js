import React, { Component } from 'react'

export const SettingContext = React.createContext();

// export class Site extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "My 🍕 Website",
//       link: "https://google.com"
//     }
//   }
//   render() {
//     return (
//       <SettingContext.Provider value={this.state}>
//         {this.props.children}
//       </SettingContext.Provider >
//     )
//   }
// }

// export default Site


export default function Site(props) {
  const state = {
    title: "My 🍕 Website",
    link: "https://google.com"
  };

  return (
    <SettingContext.Provider value={state}>
      {props.children}
    </SettingContext.Provider >
  )
}

