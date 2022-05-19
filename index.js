function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    alert("Valid email address!");
    document.form1.text1.focus();
  } else {
    document.form1.text1.focus();
    return false;
  }
}

const Check = () => {
  const email = document.querySelector("input").value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.match(mailformat)) {
    alert("Valid email address!");
    return true;
  } else {
    document.querySelector("input").style = "border: 0.2px solid red; ";
    document
      .querySelector("input[type=text]")
      .style.setProperty("color", "red");
    document.getElementById("spanAlert").classList.add("span_js");

    document.getElementById("spanAlert").classList.remove("span");

    return false;
  }
};

const Toggle = () => {
  const div = document.querySelector(".app__header__mobile");
  div.style = "display: flex; ";
  const close = document.querySelector(".close");
  const hamburger = document.querySelector(".hamburger");
  hamburger.style = "display:none";
  close.style = "display:block;";
};

const hide = () => {
  const div = document.querySelector(".app__header__mobile");
  div.style = "display: none; ";
  const close = document.querySelector(".close");
  const hamburger = document.querySelector(".hamburger");
  hamburger.style = "display:flex";
  close.style = "display:none;";
};
