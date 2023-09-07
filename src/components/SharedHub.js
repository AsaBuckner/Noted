import React from "react";

export default function SharedHub(props){
    const {cubes} = props
    return cubes.map((cube, index) => {
        switch (cube) {
            case "Note":
                return (
                    <div onClick={()=>(console.log(index))} key={`Note-${index}`} className="Note">
                        <p>Note</p>
                    </div>
                );

            case "Memo":
                return (
                    <div onClick={()=>(console.log(index))} key={`Memo-${index}`} className="Note">
                        <p>Memo</p>
                    </div>
                );

            case "List":
                return (
                    <div onClick={()=>(console.log(index))} key={`List-${index}`} className="Note lrg">
                        <p>List</p>
                    </div>
                );

            case "Timer":
                return (
                    <div key={`Timer-${index}`} className="Note">
                        <p>Timer</p>
                    </div>
                );

            case "Album":
                return (
                    <div key={`Album-${index}`} className="Note">
                        <p>Album</p>
                    </div>
                );

            default:
                return null;
        }
    });
}