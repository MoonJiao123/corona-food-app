/**
 * This file contains code for the left side bar component once used is logged in
 *
 * Contributors: Thuyet Ta, Darien
 */
import React from 'react';
import styled from 'styled-components';
import Button from "@material-ui/core/Button";

const LeftSidebarDiv = styled.div`
    position: fixed; /* stay in place on scroll and position relative to view */
    left: 0;
    height: 100%;
    width: 400 px;
    z-index: 1;  /* stay on top of everything */
    color: white;
    background-color: #67d367;
    overflow-x: hidden; /* disable horizontal scroll */
    padding-top: 10px; 
    display: inline-block;
    overflow:auto;
    max-width: 200px; /* stops div from resizing */
    min-width: 200px;
`;

const ButtonsDiv = styled.div`
   text-align: center;
   padding-bottom: 20px;
   position: absolute;
   bottom: 10px;
   width: 100%;
`;

const CompanyName = styled.h2`
    text-align: center;
    margin-bottom: 30px;
`
const CompanyMission = styled.p`
    margin-left: 5%;
    margin-right: 5%;
    font-size: 17px;
    margin-bottom: 30px;
`

class SideNav extends React.Component {
    render() {
        console.log(this.props);
        return(
            <LeftSidebarDiv>
             <img src={"media/mascot.jpg"} width={200}/>
              <CompanyName> {this.props.data.CompanyName} </CompanyName>
        <CompanyMission> {this.props.data.totalLocations} Locations </CompanyMission>
             <ButtonsDiv>
             <Button
                type="submit"
                size={"small"}
                variant="contained"
                color="default  "
                onClick={this.props.data.logout}
                >
                Log Out
            </Button>
            {"  "}
            <Button
                 type="submit"
                 variant="contained"
                 size = "small"
                 color="default  "
                 onClick={this.props.data.addLocation}>
                  Add Location
             </Button>
             </ButtonsDiv>
            </LeftSidebarDiv>
        );
    }
}
export default class LeftSideBar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props);
        return (
            <SideNav data={this.props.data}></SideNav>
        );
    }
}