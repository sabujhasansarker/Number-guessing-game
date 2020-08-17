const $ = (e) => document.querySelector(e);
let score = 0;
let chance = 5;
$(".score").innerHTML = score;
$(".chance").innerHTML = chance;
$("input").addEventListener("keypress", (e) => {
  if (chance >= 1) {
    if (e.code === "Enter") {
      let gassingNumber = Math.floor(Math.random() * 10 + 1);
      if (gassingNumber == $("input").value) {
        $("#comment").className = "right";
        $("#comment").innerHTML = " Your Guess is right";
        timeOut();
        score += 1;
        chance -= 1;
        $(".score").innerHTML = score;
        $(".chance").innerHTML = chance;
      } else {
        $("#comment").className = "wrong";
        $("#comment").innerHTML = " Your Guess is wrong";
        timeOut();
        chance -= 1;
        $(".chance").innerHTML = chance;
      }
      $("input").value = "";
    }
  } else if (chance < 1) {
    $(".reset").classList.add("resetBg");
    $(".reset").innerHTML = "Reset Your Game Again";
  }
});

const timeOut = () => {
  setTimeout(() => {
    $("#comment").className = "";
    $("#comment").innerHTML = "";
  }, 3000);
};

$(".reset").addEventListener("click", () => {
  score = 0;
  chance = 5;
  $(".score").innerHTML = score;
  $(".chance").innerHTML = chance;
  $(".reset").classList.remove("resetBg");
  $(".reset").innerHTML = "";
});
