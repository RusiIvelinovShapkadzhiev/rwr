import React, { useState } from 'react';


// const Clock = function(){
//     const currTime = () => {
//         return setTime(new Date().toString());
//     }
    
//     const [time, setTime] = useState(new Date().toString());

//     return (
//         <div>
//             <label>The current time is:</label>
//             <br/>
//             <h3>{time !== new Date().toString() ? currTime() : time}</h3>
//         </div>
//     );
// }
class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        time: new Date().toLocaleString()
      };
    }
    componentDidMount() {
      this.intervalID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
    tick() {
      this.setState({
        time: new Date().toLocaleString()
      });
    }
    render() {
      return (
        <p className="App-clock">
          The time is {this.state.time}.
        </p>
      );
    }
  }

export default Clock;