const buttons = document.querySelectorAll(".button");

console.log(buttons);
buttons[0].addEventListener("click", () => {
  window.open(
    "https://app.tecnofit.com.br/tfRedirect?u=DEDD4599F8A1",
    "_blank"
  );
});

buttons[1].addEventListener("click", () => {
  window.open("https://goo.gl/maps/PgDEDc9KEHixcE5D8", "_blank");
});

buttons[2].addEventListener("click", () => {
  window.open(
    "https://korcrossfit.com.br/2021/01/12/crossfit-e-lesoes-tudo-o-que-voce-precisa-saber/",
    "_blank"
  );
});

buttons[3].addEventListener("click", () => {
  window.open(
    "https://www.youtube.com/channel/UCSs371Yd0-FXf_wV90oIxVg?view_as=subscriber",
    "_blank"
  );
});

buttons[4].addEventListener("click", () => {
  window.open("https://wa.me/556184443337", "_blank");
});
