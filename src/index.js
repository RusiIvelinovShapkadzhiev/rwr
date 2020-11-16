import React from 'react';
import ReactDom from 'react-dom';
import Clock from './Clocks/clock';
import IntervalExample from './Clocks/clock2';

const App = function(){
    return (
        <div>
            <label>Enter name: </label>
            <input />
            <button style={{backgroundColor: 'blue', color: 'white'}}>Submit</button>
            <Clock/>
            <IntervalExample/>
        </div>
    );
}

ReactDom.render(<App />, document.querySelector('#root'));