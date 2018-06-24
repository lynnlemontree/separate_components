import React from 'react';
export class Child extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        let v = event.target.value;
        this.props.onChange(v);
    }
    render(){
        return(
            <div>
                <select onChange={this.handleChange}>
                    <option value='Javascript'>Javascript</option>
                    <option value='Python'>Python</option>
                    <option value='Ruby'>Ruby</option>
                </select>
            </div>
        )
    }
}
