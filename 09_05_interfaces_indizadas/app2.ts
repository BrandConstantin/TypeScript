interface Indizable{
    [index: number]: string
}

let l: Indizable = {}
let k = l["4"] // k es de tipo string y esta en la poisición 4