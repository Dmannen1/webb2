const element = document.getElementById("btn");
element.addEventListener("click", () => {
  alert(
    "Username: " +
      document.querySelector("#uname").value +
      "\nPassword: " +
      document.querySelector("#pass").value
  );
});
