function makeStory() {
    // comment out the line below once you're sure this page is properly connected
    // to your HTML file.
    // alert("It works!");

    // get form values
    var name = document.getElementById('name').value;
    var number = document.getElementById('number').value;
    var food = document.getElementById('food').value;
    var condiment = document.getElementById('condiment').value;
    var object = document.getElementById('object').value;
    var verb = document.getElementById('verb').value;
    var place = document.getElementById('place').value;
    var person = document.getElementById('person').value;
    var adjective = document.getElementById('adjective').value;
    var noun = document.getElementById('noun').value;
    var body = document.getElementById('body').value;
    var opposites = document.getElementById('opposites').value;
    var number2 = document.getElementById('number2').value;
    var distance = document.getElementById('distance').value;
    var location = document.getElementById('location').value;
    var verb2 = document.getElementById('verb2').value;
    var adjective2 = document.getElementById('adjective2').value;
    var verb3 = document.getElementById('verb3').value;
    var body2 = document.getElementById('body2').value;
    var verb4 = document.getElementById('verb4').value;


    // Set title of story.
    var title = "Hello";

    // Build story.
    var paragraph1 = "Hello, it's " + name + ". I was wondering if after " + number + " years you'd ate my " + food + ". With my only " + condiment + " packet.";
    var paragraph2 = "They say that " + object + " is supposed to heal ya, but I ain't done much healing. Hello, can you " + verb + " me?";
    var paragraph3 = "I'm in " + place + " dreaming about who " + person + " used to be. When " + person + " was younger, and " + adjective + ".";
    var paragraph4 = "I've forgotten how it felt before the " + noun + " fell at our " + body + "."
    var paragraph5 = "There's such a difference between " + opposites + " and " + number2 + " " + distance + ". Hello from " + location + "."
    var paragraph6 = "At least I can say that I've " + verb2 + " to tell you I'm " + adjective2 + " for " + verb3 + " your " + body2 + "."
    var paragraph7 = "But it don't matter it clearly doesn't " + verb4 + " you apart anymore."

    // Display story.
    document.getElementById('one').innerHTML = paragraph1;
    document.getElementById('two').innerHTML = paragraph2;
    document.getElementById('three').innerHTML = paragraph3;
    document.getElementById('four').innerHTML = paragraph4;
    document.getElementById('five').innerHTML = paragraph5;
    document.getElementById('six').innerHTML = paragraph6;
    document.getElementById('seven').innerHTML = paragraph7;

}
