document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let q1 = document.getElementById("q1");
  let q2 = document.getElementById("q2");
  let q3 = document.getElementById("q3");
  let q4 = document.getElementById("q4");

  if (q1 === "King") {
    document.getElementById("q1").innerHTML = "Correct!";
  } else {
    document.getElementById("q1").innerHTML = "Incorrect!";
  }

  if (q2 === "Travis Scott") {
    document.getElementById("q2").innerHTML = "Correct!";
  } else {
    document.getElementById("q2").innerHTML = "Incorrect!";
  }

  if (q3 === "The Dark Knight Rises") {
    document.getElementById("q3").innerHTML = "Correct!";
  } else {
    document.getElementById("q3").innerHTML = "Incorrect!";
  }

  if (q4 === "Soccer") {
    document.getElementById("q4").innerHTML = "Correct!";
  } else {
    document.getElementById("q4").innerHTML = "Incorrect!";
  }
}
