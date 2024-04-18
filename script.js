const signUpEL = document.querySelector(".cta-input-wrapper .btn--dark");

signUpEL.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.currentTarget);
  document.body.classList.toggle("btn-grow");
});
