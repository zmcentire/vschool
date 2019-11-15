import React from 'react';
import friendsInfo from './Friends.json';
import Friend from './Friend.js';





const FriendsList = () => {
    //forloop find name and breed set var 
    // let loopedPets = () => {
    //     for(let i = 0; i<friendsInfo.pets.length; i++){
    //         return friendsInfo.pets[i].name
    //     }
    // }
    // let loopedbreed = () => {
    //     for(let i=0; i<friendsInfo.pets.length; i++){
    //         return friendsInfo.pets[i].breed
    //     }
    // }
    const mappedFriends = friendsInfo.map(((friend, i) => <Friend
    key={i}
                                                            name={friend.name}
                                                            age={friend.age}
                                                            pets = {friend.pets}
                                                            
    />)
    )
    
    return (
        
        <div>
            {mappedFriends}
            {/* {mappedPets} */}
        </div>
    )
}

export default FriendsList