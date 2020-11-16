import React from 'react';
import ReactDom from 'react-dom';

const App = function(){
    return (
        <div>
            <label>Enter name: </label>
            <input />
            <button style={{backgroundColor: 'blue', color: 'white'}}>Submit</button>
        </div>
    );
}

ReactDom.render(
    <App />,
    document.querySelector('#root')
);