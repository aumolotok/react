import { BasePropsInterface, BaseStateInterface } from "../Common/CommonInterfaces/BaseInterface";
import React from "react";
import {Bootstrap} from "../Helpers/Bootstrap/BootstrapHelper";

export class Footer extends React.Component<FooterProps, FooterState>{
    render(){
        return (
            <footer>
                <div className = {Bootstrap.Grid().containerFluid}>
                    <div className = {Bootstrap.Grid().rowClass}>
                        <div>

                        </div>

                        <div>

                        </div>

                        <div>

                        </div>

                    </div>  
                </div>
                 <h1>Footer</h1>
            </footer>
        )
    }
}

export interface FooterProps extends BasePropsInterface{ }

export interface FooterState extends BaseStateInterface{ }