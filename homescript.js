const username = document.getElementById("name");
const usermsg = document.getElementById("message");
const useremail = document.getElementById("email");
const headingMsg = document.querySelector("#msg");

const returnFunction = async () => {
  window.location.href = "/";
};

const loadData = async () => {
  try {
    const response = await fetch("/senddata");
    const data = await response.json();

    if (data.name && data.contact_email && data.message) {
      usermsg.innerText = data.message;
      username.innerText = data.name;
      useremail.innerText = data.contact_email;
    } else {
      headingMsg.innerText = "No data available";
    }
  } catch (error) {
    console.log("Error fetching data:", error);
    headingMsg.innerText = "Error loading your data";
  }
};

loadData();
