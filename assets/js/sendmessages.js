// function to send single order to whatsapp
function sendWhatsAppMessage(element) {
    var body = element.closest(".card-doctor").querySelector(".body");
    var name = body.querySelector("p").textContent;
    var price = body.querySelector("span").textContent;
  
    var whatsappNumber = "09164156732";
    var whatsappUrl = "https://wa.me/" + whatsappNumber + "?text=";
  
    var messageText = "Name: " + name + "\nPrice: " + price;
  
    window.open(whatsappUrl + encodeURIComponent(messageText), "_blank");
  }
  
    // function to send multiple orders to whatsapp
  function sendMessage() {
    var fullName = document.getElementById("full-name").value;
    var phoneNumber = document.getElementById("phone-number").value;
    var houseAddress = document.getElementById("house-address").value;
    var message = document.getElementById("message").value;
  
    var whatsappNumber = "09164156732";
    var whatsappUrl = "https://wa.me/" + whatsappNumber + "?text=";
  
    var messageText = "Full Name: " + fullName + "\nPhone Number: " + phoneNumber + "\nHouse Address: " + houseAddress + "\nMessage: " + message;
  
    window.open(whatsappUrl + encodeURIComponent(messageText), "_blank");
  }