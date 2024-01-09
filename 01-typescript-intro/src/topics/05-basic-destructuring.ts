interface AudioPlayer {
    audioVolumen: number;
    songDuration: number;
    song: string;
    details: Details;

}

interface Details {
    author: string;
    year: number;
}


const audioPlayer: AudioPlayer ={
    audioVolumen: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}



//const {} = audioPlayer;

//console.log('Song: ', audioPlayer.song);
//console.log('SDurationong: ', audioPlayer.songDuration);
//console.log('author: ', audioPlayer.details.author);

//Destructuracion OBJETOS
//const {song} = audioPlayer;

//console.log('Song: ', song);

//cambiarle nombre porque creamos una variable que ya tiene la palabra song

const song= "new song"; //no destructuracion

//const {song:anotherSong} = audioPlayer;

//console.log('Song: ', anotherSong);

//varias
//const {song:anotherSong, songDuration:duration} = audioPlayer;
//console.log('Song: ', anotherSong);
//console.log('Duration:: ', duration);


//Sacar autor de details que esta anidado en cancion
//const {song:anotherSong, songDuration:duration, details:{author}} = audioPlayer;
const {song:anotherSong, songDuration:duration,details} = audioPlayer;
const {author} = details;

//console.log('Song: ', anotherSong);
//console.log('Duration:: ', duration);
//console.log('Autor:: ', author);




//  DESTRUCTURACIÓN de Arreglos. cuenta desde 0

const dbz: string[] =['Goku', 'Vegeta','Trunk'];
//console.log('Personaje 3:',dbz[2]);

//Para poner un error
//console.error('Personaje 3:',dbz[3] || 'No hay personaje');

const [p1, p2, trunk] : string[] =['Goku', 'Vegeta','Trunk'];
//[, , trunk] tambien seriria
//[, , trunk='Not found']

//const trunk= dbz[3] || 'No hay personaje'; //error por si hay fallo

console.error('Personaje 3:',trunk);














export {};