import React from "react";
import { BasePropsInterface, BaseStateInterface } from "../Common/CommonInterfaces/BaseInterface";
import { NavBarLink, NavBarLinkProps, NavBar } from "./Nav";

export class Header extends React.Component<HeaderProps, HeaderState>{

    headerClass : string = "text-danger";

    links : NavBarLinkProps[] = [
        {class : "nav-link", href : "#", title : "Create"},
        {class : "nav-link", href : "#", title : "Find"},
        {class : "nav-link", href : "#", title : "Sourses"},
    ]

    constructor(props: HeaderProps){
        super(props)
        this.state = {
            className : "text-danger"
        }
    }

    render(){
        return(
                <NavBar links = {this.links}/>
        ) 
    }

    changeLinkSTate(i: number){
         
    }
}

export interface HeaderProps extends BasePropsInterface{ }

export interface HeaderState extends BaseStateInterface{ }






// <nav className="navbar navbar-expand-sm bg-light justify-content-center">
            //     <a className="navbar-brand" href="#">Create</a>
            //     <a className="navbar-brand" href="#">Find</a>
            //     <a className="navbar-brand" href="#">Sourses</a>
            // </nav>
