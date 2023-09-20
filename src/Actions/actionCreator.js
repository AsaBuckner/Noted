import axios from "axios"

const DELETE_TILE = "DELETETILE"
const GET_PERSONAL_DATA = "GETPERSONALDATA"
const GET_SHARED_DATA = "GETSHAREDDATA"
const POST_TILE = "POSTTILE"
const UPDATE_TILE = "UPDATETILE"
const UPDATE_THEME = "UPDATETHEME"

function deleteTile(tileType, userId, tileId) {
    axios.delete(/** Url/{tileType}/{userId}/{id}*/)
        .then((res) => {
            console.log(res.data)
            getPersonalData(userId)
        })
        .catch((err) => {
            console.log(err)
        })
}

function getPersonalData(userID) {
    axios.get(/** Url, /{userID}*/)
        .then((res) => {
            console.log(res.data)
            // return{
            //     type: GET_PERSONAL_DATA,
            //     data: res.data
            // }
        })
        .catch((err) => {
            console.log(err)
        })
};


    function postTile(userId, tileType, body) {
        axios.post(/** Url /{tileType}/{userID}/, {body} */)
            .then((res) => {
                console.log(res.data)
                getPersonalData(userId)
            })
            .catch((err) => {
                console.log(err)
            })
    };
    

    function updateTile(userID, tileType ,id, body){
        axios.put(/** Url /{tileType}/{userID}/{id}, {body} */)
            .then((res) => {
                console.log(res.data)
                getPersonalData(userID)
            }).catch((err) => {
                console.log(err)
            })
    }


    function updateTheme(color){
        axios.put(/** Url /{userID}, color */)
            .then((res) => {
                console.log(res.data)
                // return{
                //     type: UPDATE_THEME,
                //     theme: res.data.theme
                // }
            }).catch((err) => {
                console.log(err)
            })
    }




// function getSharedData(userID) {
//     axios.get(/** Url /Shared/{userID}*/)
//         .then((res) => {
//             console.log(res.data)
//             // return{
//             //     type: GET_SHARED_DATA,
//             //     data: res.data
//             // }
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// };


