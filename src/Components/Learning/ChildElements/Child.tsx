import React from 'react';

export class Child extends React.Component<ChildProps> {
    render(){
        return(
            <div className = {this.props.class} id = {this.props.name}>
                <p> Here is some text</p>
            </div>
        )
    }
}

export interface ChildProps {
    class?:string;
    name: string;
}