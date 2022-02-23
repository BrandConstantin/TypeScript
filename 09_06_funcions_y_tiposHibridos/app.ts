// type Comparator = (a: string, b: string) => number;
interface Comparator{
    (first: string, second: string): number
}

function sort(c: Comparator){
    let out = c("mama", "casa");
}