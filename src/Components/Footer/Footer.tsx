import { BasePropsInterface, BaseStateInterface } from "../Common/CommonInterfaces/BaseInterface";
import React from "react";

export class Footer extends React.Component<FooterProps, FooterState>{
    render(){
        return <h1>Footer</h1>
    }
}

export interface FooterProps extends BasePropsInterface{ }

export interface FooterState extends BaseStateInterface{ }