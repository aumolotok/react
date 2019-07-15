import React from "react";
import { BaseStateInterface, BasePropsInterface } from "../../Common/CommonInterfaces/BaseInterface";

export class SourseCard extends React.Component<SourseCardProps, SourseCardState>{

    constructor(props : SourseCardProps){
        super(props);
        this.state = {
            show : props.show
        }
    }

    render() {
        if (this.state.show) {
            return(
                <h1 className = "bg-danger">Sourses {this.showState()}</h1>
            )
        } else {
            return null
        }
    }

    showState(): string {
        return String(this.state.show)
    }
}

export interface SourseCardProps extends BasePropsInterface {

} 

export interface SourseCardState extends BaseStateInterface {
    
}