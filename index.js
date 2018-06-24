import React from 'react';
import ReactDOM from 'react-dom';
import {Child} from './child';
import {Sibling} from './sibling';
class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state = {language: 'Javascript'};
        this.changeOutput = this.changeOutput.bind(this);
    }
    changeOutput(newLanguage){
        this.setState({
            language:newLanguage
        })
    }
    render(){
        return(
            <div>
                <Child onChange={this.changeOutput} />
               <Sibling name={this.state.language} />
            </div>
        )

    }
}




ReactDOM.render(<Parent />,root);