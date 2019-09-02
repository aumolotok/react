import { BasePropsInterface, BaseStateInterface } from "../Common/CommonInterfaces/BaseInterface";
import React from "react";
import { LinkProps, Link } from "../Common/CommonComponents/Link";
import { BaseComp } from "../Main/MainElement";

export class NavBar extends React.Component<NavBarProps, NavBarSate> {

    yandex = "https://www.yandex.ru";

    links : LinkProps[] = [
        { className : "active", title : "Home", href : "yandex"},
        {title : "About", href : "yandex"},
        {title : "Work", href : "yandex"},
        {title : "Propcess", href : "yandex"},

    ]

    render(){
        return(
            <nav>
                {this.links.map((p) => BaseComp.link(p))}
                {/* <a className = "active" h>Home</a>
                <a>About</a>
                <a>Work</a>
                <a>Propcess</a> */}
            </nav>
        )
    }


}

export interface NavBarProps extends BasePropsInterface{
   
}

export interface NavBarSate extends BaseStateInterface{

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