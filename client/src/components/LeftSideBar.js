/**
 * This file contains code for the left side bar component once used is logged in
 *
 * Contributors: Thuyet Ta
 */
import React from 'react';
import styled from 'styled-components';
import Button from "@material-ui/core/Button";

const Style = styled.div`
    position: fixed; /* stay in place on scroll and position relative to view */
    left: 0;
    height: 100%;
    width: 400 px;
    z-index: 1;  /* stay on top of everything */
    color: white;
    background-color: black;
    overflow-x: hidden; /* disable horizontal scroll */
    padding-top: 10px; 
    display: inline-block;
`;

const divStyle = styled.div`
   position: absolute;
   bottom: 10px;
   width: 100%;
`;


class SideNav extends React.Component {
    render() {
        return(
            <Style>
             <img src={"https://via.placeholder.com/300.jpg"} width={200}/>
             <h2> Company Name </h2>
             <h3> Mission</h3>
             <divStyle>
             <Button
                type="submit"
                size={"small"}
                variant="contained"
                color="default  ">
                Log Out
            </Button>
            {"  "}
            <Button
                 type="submit"
                 variant="contained"
                 size = "small"
                 color="default  ">
                  Add Location
             </Button>
              </divStyle>
            </Style>
        );
    }
}
export default class LeftSideBar extends React.Component{
    render(){
        return (
            <SideNav></SideNav>
        );
    }
}