import React from "react";
import { BasePropsInterface, BaseStateInterface } from "../../Common/CommonInterfaces/BaseInterface";

export class SearchCard extends React.Component<SearchCardProps, SearchCardState> {

    constructor(props : SearchCardProps){
        super(props);
        this.state = {
            show : props.show
        }
    }

    render() {
        if (this.state.show) {
            return(
                <h1 className = "bg-warning"> SearchCard {this.showState()}</h1>
            )
        } else {
            return null
        }
    }

    showState(): string {
        return String(this.state.show)
    }
}

export interface SearchCardProps extends BasePropsInterface {

} 

export interface SearchCardState extends BaseStateInterface {
    
} 