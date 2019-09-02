import React from "react";
import { BasePropsInterface, BaseStateInterface } from "../Common/CommonInterfaces/BaseInterface";
import { NavBarLink, NavBarLinkProps, NavBar } from "./Nav";

export class Header extends React.Component<HeaderProps, HeaderState>{
    render(){
        return (
            <header>
                <NavBar/> 
            </header>
        )
    }
}

export interface HeaderProps extends BasePropsInterface{ }

export interface HeaderState extends BaseStateInterface{ }
