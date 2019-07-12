import React from "react";
import { CreateNewCaseCard } from "./NewCaseCard/CreateNew";
import { SearchCard } from "./SerchCard/SearchCard";
import { SourseCard } from "./Sourses/SoursesCard";
import { BaseStateInterface, BasePropsInterface } from "../Common/CommonInterfaces/BaseInterface";

export class MainElement extends React.Component<MainProps, MainState>{
    render(){
        return(
            <div>
                <CreateNewCaseCard/>
                <SearchCard/>
                <SourseCard/>
            </div>
        )
    }
}

export interface MainProps extends BasePropsInterface {

}

export interface MainState extends BaseStateInterface {

}
