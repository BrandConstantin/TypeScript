interface UserData{
    username: string,
    createdAt: Date,
    superUser: boolean
}

function login(): UserData{
    return{
        username: 'admin',
        createdAt: new Date(),
        superUser: true
    }
}

let data = login();