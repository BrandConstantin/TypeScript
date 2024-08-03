interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 30,
    song: "Mess",
    details: {
        author: "Ed Sheren",
        year: 2015
    }
}

// sin desestructuración
console.log('Song: ', audioPlayer.song);
console.log('Song author: ', audioPlayer.details.author);


// con desestructuración
const {song:nombreCancion, songDuration, details} = audioPlayer;
console.log('Song name: ', nombreCancion);
console.log('Song duration: ', songDuration);
const{author} = details;
console.log('Author: ', author);