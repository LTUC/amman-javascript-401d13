import React, { Component, useContext } from 'react';
import { ThemeContext } from '../context/Theme';
import { SettingContext } from '../context/Site';

// export class Content extends Component {
//   render() {
//     return (
//       <div>
//         <SettingContext.Consumer>
//           {
//             siteContext => {
//               return (
//                 <p>{siteContext.title}</p>
//               )
//             }
//           }
//         </SettingContext.Consumer>
//         <ThemeContext.Consumer>
//           {
//             themeContext => {
//               return (
//                 <h2>Current Mode {themeContext.mode}</h2>
//               )
//             }
//           }
//         </ThemeContext.Consumer>
//       </div>
//     )
//   }
// }

// export default Content


export default function Content() {
  const site = useContext(SettingContext);
  const theme = useContext(ThemeContext);
  return (
    <div>
      <p>{site.title}</p>
      <h2>Current Mode {theme.mode}</h2>
    </div>
  )
}

