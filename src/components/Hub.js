import React, {useState} from "react";
import {Tile} from "./Tile"
import PersonalHub from "./PersonalHub";


export default function Hub() {

const [cubes, setCubes] = useState([]);

function onClick(type){
    setCubes([...cubes, type]);
    console.log(cubes)
}

    return(
        <div id="wrapper">
            <div id="thalf">
                <h1>Hub</h1>

                <ul>
                    <a>Personal Hub</a>
                    <a>Shared Hub</a>
                    <a>Settings</a>
                </ul>

                <div id="h-bar"></div>
            </div>

            <div id="bhalf">
                <ul>
                    <p onClick={() =>{onClick("Note")}}>Note</p>
                    <p onClick={() =>{onClick("Memo")}}>Memo</p>
                    <p onClick={() =>{onClick("List")}}>List</p>
                    <p onClick={() =>{onClick("Timer")}}>Timer</p>
                    <p onClick={() =>{onClick("Album")}}>Album</p>
                </ul>

                <div id="v-bar"></div>

                <div id="hub">
                    <PersonalHub cubes = {cubes}/>
                </div>
            </div>

        </div>
    )
}