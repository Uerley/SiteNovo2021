let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let titulo = document.querySelector('#titulo');
let recente_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#acompanha_imagem');
let auto_play = document.querySelector('#auto');
let presente = document.querySelector('#presente');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');

let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

// criar um elemento de audio
let track = document.createElement('audio');

// Todos os sons
let All_song = [
    {
        name: "Primeiro som",
        path: "../musica/02 Faixa 2.mp3",
        img: "../IMG/img_1.jpg",
        singer: "first singer"
    },
    {
        name: "Segundo Som",
        path: "../musica/03 Faixa 3.mp3",
        img: "../IMG/img_2.jpg",
        singer: "second singer"
    },
    {
        name: "Terceiro Som",
        path: "../musica/05 Faixa 5.mp3",
        img: "../IMG/passando.png",
        singer: "third singer"
    },
    {
        name: "Quatro som",
        path: "../musica/01 Faixa 1.mp3",
        img: "../IMG/img_4.jpg",
        singer: "fourth singer"
    },
    {
        name: "Quinto Som",
        path: "../musica/06 Faixa 6.mp3",
        img: "../IMG/img_5.jpg",
        singer: "fifth singer"
    },
];
// Todas as funçoes
// função de load da track
function load_track(index_no) {
    clearInterval(timer);
    reset_slider();
    track.src = All_song[index_no].path;
    titulo.innerHTML = All_song[index_no].name;
    track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

    //cima avançar
    total.innerHTML = All_song.length;
    presente.innerHTML = index_no + 1;
    timer = setInterval(range_slider, 1000);
}
load_track(index_no);
//Mute som
function mute_sound() {
    track.volume = 0;
    volume.value = 0;
    volume_show.innerHTML = 0;
}

//Resetar o som slider
function reset_slider() {
    slider.value = 0;
}

// Ver se o som está tocando ou não
function justplay() {
    if (playing_song == false) {
        playsong();
    } else {
        pausesong();
    }
}
/*play som*/
function playsong() {
    track.play();
    playing_song = true;
    play.innerHTML = '<i class="fa fa-pause"></i>';
}
//pausa som
function pausesong() {
    track.pause();
    playing_song = false;
    play.innerHTML = '<i class="fa fa-play"></i>';
}
//proximo som
function next_song() {
    if (index_no < All_song.length - 1) {
        index_no += 1;
        load_track(index_no);
        playsong();
    } else {
        index_no = 0;
        load_track(index_no);
        playsong();
    }
}
//Musica anterior
function previous_song() {
    if (index_no > 0) {
        index_no -= 1;
        load_track(index_no);
        playsong();
    } else {
        index_no = All_song.length;
        load_track(index_no);
        playsong();
    }
}
// Mudar o volume
function volume_change() {
    volume_show.innerHTML = recente_volume.value;
    track.volume = recente_volume.value / 100;
}
//err o
//Mudar posição da musica
function change_duration() {
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
}
//Autoplay função estilo
function autoplay_switch() {
    if (autoplay == 1) {
        autoplay = 0;
        auto_play.style.background = "rgba(255,255,255,0.2)";
    } else {
        autoplay = 1;
        auto_play.style.background = "#FF8A65";
    }
}
function range_slider() {
    let position = 0;
    //posiçao
    if (!isNaN(track.duration)) {
        position = track.currentTime * (100 / track.duration);
        slider.value = position;
    }
    // Função é executada quando a música acabar
    if (track.ended) {
        play.innerHTML = '<i class="fa fa-play"></i>';
        if (autoplay == 1) {
            index_no += 1;
            load_track(index_no);
            playsong();
        }
    }
}