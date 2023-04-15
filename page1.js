var myForm = document.getElementById("myform");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("ciji");
  let text = document.getElementById("text");
  let email = document.getElementById("email");
  let numberphone = document.getElementById("numberphone");

  if (text.value == "" || email.value == "" || numberphone.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a username of ${text.value} and email of ${email.value} and numberPhone of ${numberphone.value}`
    );
  }
});
