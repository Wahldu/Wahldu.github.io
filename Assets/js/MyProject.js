function contact() {
    var script_url = "https://script.google.com/macros/s/AKfycbzWB6pOtkJrzW4y9aGdWFGYaqL21yJ0247c_fcVj7n-jZCRr1GoXTgCM9L0qrl0XNJh/exec";
    //get data from form
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();
    //send data
    var url = script_url + "?callback=thanks&name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&subject=" + encodeURIComponent(subject) + "&message=" + encodeURIComponent(message);
    jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });
}

function thanks(e) {
    //confirmation
    alert("Thanks, I'll get back to you soon.");
}