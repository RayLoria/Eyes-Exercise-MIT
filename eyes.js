const balls = document.getElementsByClassName("ball");

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + "%";
  const y = (event.clientY * 100) / window.innerHeight + "%";

  for (let c = 0; c < balls.length; c++) {
    balls[c].style.left = x;
    balls[c].style.top = y;
    balls[c].transform = "translate(-" + x + ",-" + y + ")";
  }
};
