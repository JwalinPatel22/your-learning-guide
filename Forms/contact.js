
function sendMail() {
    var params = {
      // name : document.getElementById('name'),
      // email : document.getElementById("email"),
      // message : document.getElementById("message")
      name: "user",
      emai: "user123@gmail.com",
      message: "This is a dynamic message.",
    };
    const serviceID = "service_wguwzki";
    const templateID = "template_dp4eqal";
  
    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message sent successfully");
      })
      .catch((err) => console.log(err));
  }