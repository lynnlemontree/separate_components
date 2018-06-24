import React from 'react';
export class Sibling extends React.Component{
    render(){
        let name = this.props.name;
        return(
            <div>
                <h1> I think {name} is the best language </h1>
                <h1> I will try my best to study {name}</h1>
            </div>
        )
    }
}