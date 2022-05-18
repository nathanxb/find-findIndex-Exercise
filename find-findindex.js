
//find method, to find username, returns undefined if not in array
function findUserByUsername(usersArray, username) {
    return usersArray.find((user) => {
        return user.username === username;
    })
}


//findIndex, used to find a username, if present, remove user, not present: return undefined
function removeUser(usersArray, username) {
    let userIndex = usersArray.findIndex((user) => {
        return user.username === username;
    })
    if (userIndex === -1) return;

    return usersArray.splice(userIndex, 1)[0];

}