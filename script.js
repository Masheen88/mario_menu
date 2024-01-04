// runs code on input submission
document.getElementById("inputField").addEventListener("input", function () {
  // set audio tag volume to 70%
  let bowserMusicAudio = document.getElementById("bowserMusic");
  let marioMusicAudio = document.getElementById("marioMusic");
  bowserMusicAudio.volume = 0.09; // 50% volume
  marioMusicAudio.volume = 0.09; // 50% volume

  let input = this.value;

  let errorMessage = document.getElementById("errorMessage");

  let backgroundEffect = document.getElementById("backgroundEffect");
  let backgroundSuccess = document.getElementById("backgroundSuccess");

  let bowserMusic = document.getElementById("bowserMusic");
  let happyMusic = document.getElementById("marioMusic");

  // If the input is correct ie. Matthew
  if (isInputCorrect(input)) {
    errorMessage.classList.add("hidden");

    backgroundEffect.classList.remove("visible");
    backgroundSuccess.classList.add("visible");

    // console.log(backgroundEffect);

    bowserMusic.pause();
    happyMusic.play();
  } else {
    console.log("Wrong input");
    errorMessage.classList.remove("hidden");
    errorMessage.classList.add("fadeIn");

    backgroundEffect.classList.remove("hidden");
    backgroundSuccess.classList.remove("visible");

    backgroundEffect.classList.add("visible");

    // console.log(backgroundEffect);

    happyMusic.pause();
    bowserMusic.play();
  }
});

function isInputCorrect(input) {
  return input.toLowerCase() === "matthew";
}
