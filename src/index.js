import React from 'react';
import ReactDom from 'react-dom';

const App = function(){
    return <div>Hi there!RRR</div>
}

ReactDom.render(
    <App />,
    document.querySelector('#root')
);