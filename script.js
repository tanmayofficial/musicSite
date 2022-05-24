console.log("welcome to spotify");
// Variables Initialisation
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let menuIcon = document.getElementsByClassName("menuIcon")[0];
let menuList = document.getElementsByClassName("menuList")[0];

let songs = [
  {
    songName: "Saami-Saami - Sunidhi Chauhan",
    filePath: "songs/1.mp3",
    coverPath: "images/samisami.jfif",
  },
  {
    songName: "Srivalli - Javed Ali & Devi Shri Prasad",
    filePath: "songs/2.mp3",
    coverPath: "images/srivalli.jpg",
  },
  {
    songName: "Babaji Ki Booti - Sachin & Jigar",
    filePath: "songs/3.mp3",
    coverPath: "images/1.jpg",
  },
  {
    songName: "Dilbar Mere - Sanam",
    filePath: "songs/4.mp3",
    coverPath: "images/artwork.jpg",
  },
  {
    songName: "Galliyan - Ek Villain",
    filePath: "songs/5.mp3",
    coverPath: "images/2.jpg",
  },
  {
    songName: "Phir Kabhi - MS Dhoni",
    filePath: "songs/6.mp3",
    coverPath: "images/3.jpg",
  },
  {
    songName: "Badtameez Dil - Yeh Jawani Hai Diwani",
    filePath: "songs/7.mp3",
    coverPath: "images/badtameez.jpg",
  },
  {
    songName: "Dhinka_chika - Ready",
    filePath: "songs/8.mp3",
    coverPath: "images/Ready.jpg",
  },
  {
    songName: "Nagin Dance - Bajatey Raho",
    filePath: "songs/9.mp3",
    coverPath: "images/nagin.jpg",
  },
  {
    songName: "Tera Naam Japdi Phiran - Cocktail",
    filePath: "songs/10.mp3",
    coverPath: "images/teranaam.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});
//Listen to Events
audioElement.addEventListener("timeupdate", () => {
  //update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");

    });
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = `songs/${songIndex+1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  });
  document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

menuIcon.addEventListener('click', () => {
  menuList.classList.toggle('active');
})