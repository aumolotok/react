import { BasePropsInterface, BaseStateInterface } from "../Common/CommonInterfaces/BaseInterface";
import React from "react";
import { LinkProps, Link } from "../Common/CommonComponents/Link";
import { BaseComp } from "../Main/MainElement";
import { Bootstrap } from "../Helpers/Bootstrap/BootstrapHelper";

export class NavBar extends React.Component<NavBarProps, NavBarSate> {

    yandex = "https://www.yandex.ru";

    size = Bootstrap.Grid().columnSized(1);

    commonClass = "active " + this.size;

    links : LinkProps[] = [
        { className : this.commonClass, title : "Home", href : "yandex"},
        { className : this.commonClass, title : "About", href : "yandex" },
        { className : this.commonClass, title : "Work", href : "yandex"},
        { className : this.commonClass,title : "Propcess", href : "yandex"},

    ]

    render(){
        return(
            <nav>
                <div className = {Bootstrap.container + "-fluid"} >
                    <div className = {Bootstrap.rowClass}>
                        <div className = "col"/>
                        {this.links.map((p) => BaseComp.link(p))}                        
                    </div>
                </div>
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