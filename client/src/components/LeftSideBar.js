/**
 * This file contains code for the left side bar component once used is logged in
 *
 * Contributors: Thuyet Ta, Darien
 */
import React from 'react';
import styled from 'styled-components';
import Button from "@material-ui/core/Button";

const LeftSidebarDiv = styled.div`
    position: absolute; /* stay in place on scroll and position relative to view */
    left: 0;
    top: 0;
    height: 100%;
    width: 15%;
    z-index: 1;  /* stay on top of everything */
    color: white;
    background-color: #67d367;
    overflow-x: hidden; /* disable horizontal scroll */
    display: inline-block;
    overflow:auto;
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
`;
const CompanyMission = styled.p`
    text-align: center;
    width: 100%;
    font-size: 17px;
    margin-bottom: 30px;
`;

class SideNav extends React.Component {
    render() {
        return(
            <LeftSidebarDiv>
             <img src={"media/mascot.jpg"} alt="mascot" width={200} style={{display: 'block', margin: 'auto'}}/>
              <CompanyName> {this.props.data.companyName} </CompanyName>
        <CompanyMission> {this.props.data.totalLocations} Locations </CompanyMission>
             <ButtonsDiv>
             <Button
                type="submit"
                size={"small"}
                variant="contained"
                onClick={this.props.data.logout}
                >
                Log Out
            </Button>
            {"  "}
            <Button
                 type="submit"
                 variant="contained"
                 size = "small"
                 onClick={this.props.data.addLocation}>
                  Add Location
             </Button>
             </ButtonsDiv>
            </LeftSidebarDiv>
        );
    }
}
export default class LeftSideBar extends React.Component{
    render(){
        return (
            <SideNav data={this.props.data}></SideNav>
        );
    }
}