interface UserData{
    readonly username: string,
    createdAt: Date,
    superUser: boolean | undefined,
    readonly personal: {
        name: string,
        email? : string
    }

    logout(): void,
    rename: (username: string) => void,
}

function login(): UserData{
    return{
        username: 'admin',
        createdAt: new Date(),
        superUser: true,
        personal: {name: "Amancio", email: "amancio@ll.es"},
        logout(){
            console.log("Adios");
        },
        rename(username){
            console.log("Rename account");
        }
    }
}

let data = login();
data.personal.email?.toLowerCase();