import React from "react";
import { CreateNewCaseCard } from "./NewCaseCard/CreateNew";
import { SearchCard } from "./SerchCard/SearchCard";
import { SourseCard } from "./Sourses/SoursesCard";
import { BaseStateInterface, BasePropsInterface } from "../Common/CommonInterfaces/BaseInterface";
import { LinkProps, Link } from "../Common/CommonComponents/Link";

export class MainElement extends React.Component<MainProps, MainState>{

    constructor(props : MainProps){
        super(props);
    }

    render(){
        return(
            <div>
                <CreateNewCaseCard show = {this.props.cardsVisibility[0]}/>
                <SearchCard show = {this.props.cardsVisibility[1]}/>
                <SourseCard show = {this.props.cardsVisibility[2]}/>
            </div>
        )
    }
}

export interface MainProps extends BasePropsInterface {
    cardsVisibility: BooleanArray;
}

export interface MainState extends BaseStateInterface {
}

enum ShowState {
    Display,
    Hide
}

interface BooleanArray {
    [index: number]: boolean;
}


export class BaseComp{
    static link = (linkProps : LinkProps) =>{
        if (linkProps.className == null){
            return <Link href = {linkProps.href} title = {linkProps.title}/>
        }
        return <Link className = {linkProps.className} href = {linkProps.href} title = {linkProps.title} key = {linkProps.title}/>
    }
}