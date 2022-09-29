import React from "react";

import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isThanksMsg: props?.isThanksMsg === undefined ? false : props.isThanksMsg,
    };
  }

  //handler goes here
  handleClick = () => {
    this.setState((prevState) => ({
      isThanksMsg: !prevState.isThanksMsg,
    }));
  };

  componentDidUpdate(prevProps) {
    if (this.props.isThanksMsg !== prevProps.isThanksMsg) {
      this.setState(() => ({ ...this.props }));
    }
  }

  render() {
    return (
      <div>
        <p>Greetings!</p>
        <p>Button goes here</p>
        <div className="center-div">
          <button className="main-button" onClick={this.handleClick}>
            {this.state.isThanksMsg ? "Thanks!" : "Click Me!"}
          </button>
        </div>
      </div>
    );
  }
}

// import React from "react";

// import "./App.css";

// export const Button = ({ isThanksMsg = true, onClick }) => {
//   return (
//     <div className="center-div">
//       <button className="main-button" onClick={onClick}>
//         {isThanksMsg ? "Click Me!" : "Thanks!"}
//       </button>
//     </div>
//   );
// };

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     const { isThanksMsg } = this.props;
//     this.state = {
//       isThanksMsg: isThanksMsg,
//     };
//   }

//   //handler goes here
//   handleClick = () => {
//     this.setState((prevState) => ({
//       isThanksMsg: !prevState.isThanksMsg,
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <p>Greetings!</p>
//         <p>Button goes here</p>
//         <Button
//           isThanksMsg={this.state.isThanksMsg}
//           onClick={this.handleClick}
//         />
//       </div>
//     );
//   }
// }
