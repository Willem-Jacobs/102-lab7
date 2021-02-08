function getUserName() {
  let userName = prompt("Please Enter Your Name");
  let elName = document.querySelector('h2')
  elName.innerText = userName
  //document.write(userName);
  return userName;
}

function checkName(userName) {
  if (userName == "Willem") {
    document.write("<h3>" + "Welcome Darth " + userName + "</h3>");
  } else {
    document.write("<h3>" + "Welcome " + userName + " as guest " + "</h3>");
  }
}

function checkChoice(userName) {
  let userChoice = confirm("Are you happy today?");

  if (userChoice) {
    document.write("<h1>" + userName + " Says he is happy today" + "</h1>");
  } else {
    document.write(username + " Says he is not happy today");
  }
}

let userName = getUserName()
if (!userName) {
    alert('You did not enter your name')
} else {
    checkName(userName)
    checkChoice(userName)
}
