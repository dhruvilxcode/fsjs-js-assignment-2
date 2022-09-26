const container = document.querySelector(".container");

const drum = [
  [
    "./assets/bass.wav",
    "./assets/BRUSH_ROLL_1.wav",
    "./assets/BRUSH_ROLL_2.wav",
    "./assets/BRUSH_ROLL_3.wav",
  ],
  [
    "./assets/BRUSH_SLAP_1.wav",
    "./assets/BRUSH_SLAP_2.wav",
    "./assets/BRUSH_SLAP_3.wav",
    "./assets/BRUSH_SLAP_4.wav",
  ],
  [
    "./assets/BRUSH_SLAP_5.wav",
    "./assets/BRUSH_SLAP_6.wav",
    "./assets/CASTANETS_1.wav",
    "./assets/CASTANETS_2.wav",
  ],
  [
    "./assets/CRASHTD_1.wav",
    "./assets/CRASHTD_2.wav",
    "./assets/CRASHTD_3.wav",
    "./assets/ExcellentMELODIC.wav",
  ],
  [
    "./assets/HH_ACOUSTIC_CLOSED_INNER.wav",
    "./assets/HH_ACOUSTIC_CLOSED_OUTER.wav",
    "./assets/HH_ACOUSTIC_OPEN_INNER.wav",
    "./assets/HH_ACOUSTIC_OPEN_OUTER.wav",
  ],
  [
    "./assets/SCISSORS.wav",
    "./assets/SNAPS_Real.wav",
    "./assets/Timpani1.wav",
    "./assets/Timpani2.wav",
  ],
];

drum.forEach((row) => {
  const drumRow = document.createElement("div");
  drumRow.className = "row";

  row.forEach((pad) => {
    const padBtn = document.createElement("button");
    padBtn.className = "drum-pad";
    padBtn.addEventListener("click", function () {
      playAudio(pad);
    });

    drumRow.appendChild(padBtn);
  });

  container.appendChild(drumRow);
});

function playAudio(url) {
  const audioPlayer = new Audio(url);
  audioPlayer.play();
}
