import React, {useState} from "react";
import {Tile} from "./Tile"
import PersonalHub from "./PersonalHub";
import SharedHub from './SharedHub'




export default function Hub() {

    
    //CUBES WILL BE SET TO STATE RECIEVED FROM GET REQUEST.
    const [cubes, setCubes] = useState(GET_PERSONAL_DATA());
    const [board, setBoard] = useState("personal")

    //DISPATCH FUNCTION GETPERSONALDATA ON MOUNT TO DISPLAY USER TILES
    //DISPATCH FUNCTION GETSHAREDDATA WHEN BOARD SWITCHS TO DISPLAY USER TILES 

    function addTile(type){
        setCubes([...cubes, type]);
        console.log(cubes)
    }

    function boardChange(board){
        setBoard(board);
    }

    return(


        <div id="wrapper">


            {/* 
            Board Selection Section -- Personal Hub || Shared Hub || Settings?
            */}

            <div id="board_Nav">
                <h1>Noted</h1>

                <ul className="board_Bottons">
                    <button onClick={()=>{boardChange("personal")}} className={board === "personal" ? "selected" : null}>Personal Hub</button>
                    <button onClick={()=>{boardChange("shared")}} className={board === "shared" ? "selected" : null}>Shared Hub</button>
                    <button onClick={()=>{boardChange("settings")}} className={board === "settings" ? "selected" : null}>Settings</button>
                </ul>

                <div id="h_Divider"></div>
            </div>


            {/*
            Tile Selection Section -- Add Note / Memo / List / Timr / Album
            */}

            <ul className="tile_Bottons">
                <p onClick={() =>{addTile("Note")}}>Note</p>
                <p onClick={() =>{addTile("Memo")}}>Memo</p>
                <p onClick={() =>{addTile("List")}}>List</p>
                <p onClick={() =>{addTile("Timer")}}>Timer</p>
                <p onClick={() =>{addTile("Album")}}>Album</p>
            </ul>


            <div id="v_Divider"></div>


            {/*
            THE HUB -- Collection of Users Tiles
            */}

            <div id="hub">
            {board === "personal" && <PersonalHub cubes = {cubes}/>}
            {board === "shared" && <SharedHub cubes = {cubes}/>}
            {/* 
            {board === "settings" && <SettingsHub />} 
            */}
            </div>
            

        </div>


    )
}

//Need to add State controlled by the Reducer Store 
// 1. On Open -- Get Existing Tiles // Theme Color
// 2. Shared Hub -- Get Shared Tiles 