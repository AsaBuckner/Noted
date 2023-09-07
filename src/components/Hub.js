import React, {useState} from "react";
import {Tile} from "./Tile"
import PersonalHub from "./PersonalHub";
import SharedHub from './SharedHub'

export default function Hub() {

const [cubes, setCubes] = useState([]);
const [board, setBoard] = useState("personal")
function addTile(type){
    setCubes([...cubes, type]);
    console.log(cubes)
}

function boardChange(type){
    setBoard(type);

}

    return(
        <div id="wrapper">
            <div id="thalf">
                <h1>Noted</h1>

                <ul className="boardBttns">
                    <button onClick={()=>{boardChange("personal")}} className={board === "personal" ? "selected" : null}>Personal Hub</button>
                    <button onClick={()=>{boardChange("shared")}} className={board === "shared" ? "selected" : null}>Shared Hub</button>
                    <button onClick={()=>{boardChange("settings")}} className={board === "settings" ? "selected" : null}>Settings</button>
                </ul>

                <div id="h-bar"></div>
            </div>

          
            <ul className="tileBttns">
                <p onClick={() =>{addTile("Note")}}>Note</p>
                <p onClick={() =>{addTile("Memo")}}>Memo</p>
                <p onClick={() =>{addTile("List")}}>List</p>
                <p onClick={() =>{addTile("Timer")}}>Timer</p>
                <p onClick={() =>{addTile("Album")}}>Album</p>
            </ul>

            <div id="v-bar"></div>

            <div id="hub">
            {board === "personal" && <PersonalHub cubes = {cubes}/>}
            {board === "shared" && <SharedHub cubes = {cubes}/>}
            {/* {board === "settings" && <SettingsHub />} */}
            </div>
            

        </div>
    )
}