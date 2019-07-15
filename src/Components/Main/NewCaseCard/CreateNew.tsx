import React from "react";
import { BasePropsInterface, BaseStateInterface } from "../../Common/CommonInterfaces/BaseInterface";

export class CreateNewCaseCard extends React.Component<CreateNewCaseCardProps, CreateNewCaseCardState> {

    constructor(props : CreateNewCaseCardProps){
        super(props);
        this.state = {
            show : props.show
        }
    }

    render() {
        if (this.state.show) {
            return(
                <h1 className = "bg-info">Create New Case {this.showState()}</h1>
            )
        } else {
            return null
        }
    }

    showState(): string {
        return String(this.state.show)
    }


}

export interface CreateNewCaseCardProps extends BasePropsInterface {

} 

export interface CreateNewCaseCardState extends BaseStateInterface {
    
}