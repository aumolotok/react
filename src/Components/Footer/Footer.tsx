import { BasePropsInterface, BaseStateInterface } from "../Common/CommonInterfaces/BaseInterface";
import React from "react";
import {Bootstrap} from "../Helpers/Bootstrap/BootstrapHelper";
import { ClassHelper } from "../Helpers/ClassHelper";
import { Columns } from "../Helpers/Bootstrap/Grid/GridEnums";

export class Footer extends React.Component<FooterProps, FooterState>{

    row = new ClassHelper(Bootstrap.Grid().rowClass).get();
    container = new ClassHelper(Bootstrap.Grid().containerFluid). get();
    col = Bootstrap.Grid().columnSized;

    render(){
        return (
            <footer>
                <div className = {this.container}>
                    <div className = {this.row}>
                        <div className = {this.col(1)}>

                        </div>  

                        <div className = {Bootstrap.Grid().columnClass(Columns.None)}>
                            <h1>Kaban design, Inc</h1>
                            <p>@ All rights reserved</p>
                            <p>Designd by Lisa</p>
                        </div>

                        <div className = {this.col(3)}>
                            <p>aumoloko@jmail.com</p>
                            <p>+ 43 444 333 222</p>
                        </div>

                        <div className = {this.col(3)}>

                        </div>

                        <div className = {this.col(2)}>
                            <p>Facebook</p>
                            <p>Instagram</p>
                            <p>Tweeter</p>
                            <p>YouTube</p>
                        </div>  

                    </div>  
                </div>
                 
            </footer>
        )
    }
}

export interface FooterProps extends BasePropsInterface{ }

export interface FooterState extends BaseStateInterface{ }