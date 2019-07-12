import { BasePropsInterface, BaseStateInterface } from "../Common/CommonInterfaces/BaseInterface";
import React from "react";

export class NavBar extends React.Component<NavBarProps, NavBarSate> {
    constructor(props: NavBarProps){
        super(props);
        this.state = {
            className: "navbar navbar-expand-sm bg-dark navbar-dark",
            links: props.links
        }
    }


    render(){
        return(
            <nav className = {this.state.className}>
                <ul className="navbar-nav">
                    {this.state.links.map( p => this.renderLink(p))}
                </ul>
            </nav>
        )
    }

    renderLink(linkProp : NavBarLinkProps){
        return(
            <NavBarLink title = {linkProp.title} href = {linkProp.href} class = {linkProp.class}/>
        )
    }
}

export interface NavBarProps extends BasePropsInterface{
    links: NavBarLinkProps[];    
}

export interface NavBarSate extends BaseStateInterface{
    links: NavBarLinkProps[];
}



export class NavBarLink extends React.Component<NavBarLinkProps, NavBarLinkState> {
    active: string = "nav-item active";
    nonActive: string = "nav-item";

    constructor(props: NavBarLinkProps){
        super(props);
        this.state = this.props;
    }

    render(){
        return(
            <li className = {this.props.class}>
                <a className = "nav-link" href = {this.props.href}>{this.props.title}</a>
            </li>
        )
    }


}

export interface NavBarLinkProps {
    class: string;
    href: string;
    title: string;
}

export interface NavBarLinkState {
    class: string;
    href: string;
    title: string;
}