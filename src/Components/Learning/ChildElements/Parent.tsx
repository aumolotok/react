import React from 'react';
import { Child, ChildProps } from './Child';
import { all } from 'q';

export class Parent extends React.Component<ParentProps> {

    constructor(props : ParentProps){
        super(props);
        //this.props.children
    }


    render(){
        var targetName = "one";

        var allChildren : Child[] = React.Children.map(this.props.children, child => {
              return  child as Child
        })

        var oneChildrenn = allChildren.map( Child => {
            if (Child.props.name == targetName){
                return Child;
            }
        })


        return (



            <div className = "myParent">
                {allChildren}
                {/* <Child/>
                <Child/>
                <Child/>
                <Child/>
                <Child/>
                <p>{this.classN}</p>
                <button onClick = {this.getElementsText}>Push me</button> */}
            </div>
            
        )
    }

    classN : string = "NO";

    getElementsText = () =>{
        var child : React.ReactNode = this.props.children;

        console.log(child)
        
    }

    clickOn = () => {
        this.getElementsText();
        this.setState(this.state);
    }
}

export interface ParentProps {
}