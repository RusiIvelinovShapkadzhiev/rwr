import React from 'react';
import ReactDom from 'react-dom';
import Clock from './Clocks/clock';
import IntervalExample from './Clocks/clock2';
import CommentApproveCard from './CustomComponents/CommentApproveCard';
import faker from 'faker';

const App = function(){
    return (
        //#region Clocks
        // <div>
        //     <label>Enter name: </label>
        //     <input />
        //     <button style={{backgroundColor: 'blue', color: 'white'}}>Submit</button>
        //     <Clock/>
        //     <IntervalExample/>
        // </div>
        //#endregion
        <div className="ui container comments">
            <CommentApproveCard
                author="Sam"
                sourcee={faker.image.business()}
                greenButtonText="Approve"
                redButtonText="Reject"
                yesColor="white"
                noColor="black"
            />
            <CommentApproveCard author="Alex" sourcee={faker.image.city()} greenButtonText="Yes"
                redButtonText="No" yesColor="orange" noColor="purple"/>
            <CommentApproveCard author="Jane" sourcee={faker.image.sports()} greenButtonText="Great"
                redButtonText="Nope"  yesColor="blue" noColor="yellow"/>
            <CommentApproveCard author="Bob" sourcee={faker.image.nature()} greenButtonText="Sure"
                redButtonText="Totally not"  yesColor="gray" noColor="brown" />
            <CommentApproveCard author="Alen" sourcee={faker.image.nightlife()} greenButtonText="Agree"
                redButtonText="DisAgree"  yesColor="green" noColor="red" />
        </div>
    );
}

ReactDom.render(<App />, document.querySelector('#root'));