var paragraph = document.createElement('p');
var textNode = document.createTextNode("You are accused of cosmic crimes by the GAMARO OF MAGNARAX. How do you plead?");
var gameText = document.getElementById("game");

var btn0 = document.getElementById("btn0"); 
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

var btn0_content = document.createTextNode("GUILTY"); //creates the text node for the buttons
var btn1_content = document.createTextNode("INNOCENT");
var btn2_content = document.createTextNode("");
var btn3_content = document.createTextNode("");

function start() {

    document.getElementById("start_button").style.display = "none";

    paragraph.appendChild(textNode);
    gameText.appendChild(paragraph);

    btn0.appendChild(btn0_content);//appends the text node to the button
    btn1.appendChild(btn1_content);
    btn2.appendChild(btn2_content);
    btn3.appendChild(btn3_content);
}

var yourHPElement = document.getElementById("you");
var bossHPElement = document.getElementById("boss");
var yourHP = 100;
var bossHP = 100;
var dice = Math.floor(Math.random()*10)+1;
var hit = dice;
var shield = "down";
var turnCounter = 1;

function fight() {
    //var turn = "boss";
    btn0_content.textContent = "Attack";
    btn1_content.textContent = "Defend";
    btn2_content.textContent = "Item";
    btn3_content.textContent = "Inspect";

    buttonDisable();

    yourHPElement.textContent = yourHP; //displays hp value set in yourHP
    bossHPElement.textContent = bossHP;

    rollBossInitial();

    gameText.children[1].textContent = "You are to be executed. You are struck for " + hit + " damage but did not fall.";    

    btn0.onclick = rollYours;
    btn1.onclick = defend;
    btn2.onclick = item;
    btn3.onclick = inspect;

    setTimeout(function(){buttonEnable();}, 3000);

    setTimeout(function(){message("Take action.");}, 3000);
}

function message(text) {
    gameText.children[1].textContent = text;
}

function rollBossInitial() {
    yourHP = yourHP - hit;
    yourHPElement.textContent = yourHP;
    //turn = "yours";
}

function rollBoss() {
    if (shield === "up") {
       hit = Math.ceil(random() / 4); 
    }   else {
            hit = random();
        }

    message("Your foe readies his attack.");
    setTimeout(function(){strike();}, 1500);

    function strike() {
        yourHP = yourHP - hit;
        yourHPElement.textContent = yourHP;

        if (shield === "up") {
            message("You endure the suffering of " + hit + " damage. Instead of " + hit * 4 + " damage.");
        }   else {
                message("You endure the suffering of " + hit + " damage.");
            }
        if (yourHP > 0) {
            turnCounter++;
            setTimeout(function(){buttonEnable();}, 3000);
        }   else {
                setTimeout(function(){message("Your molecules have been scattered by the Unholy God Emperor, Gamaro of Magnarax. You survived for " + turnCounter + " rounds.");}, 3000); 
            }
        //turn = "yours";
    }
}

function rollYours() {
    shield = "down";
    hit = random();
    bossHP = bossHP - hit;
    bossHPElement.textContent = bossHP;
    message("You strike the Exalted One for " + hit + " damage.");
    buttonDisable();

    if (bossHP < 1) {
        setTimeout(function(){message("You have defeated the Gamaro of Magnarax in " + turnCounter + " rounds. You are free to return to the Gray Waste.");}, 3000);
    }   else {
            setTimeout(function(){rollBoss();}, 3000);
        }
    //turn = "boss";
}

function defend() {
    shield = "up";
    message("You brace yourself.");
    buttonDisable();
    setTimeout(function(){rollBoss();}, 3000);
}

function random() {
    return Math.floor(Math.random()*50)+1;
}

function buttonDisable() {
    btn0.disabled = true;
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn0.style.backgroundColor = "grey";
    btn1.style.backgroundColor = "grey";
    btn2.style.backgroundColor = "grey";
    btn3.style.backgroundColor = "grey";
}

function buttonEnable() {
    btn0.disabled = false;
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
    btn0.style.backgroundColor = "#EAC67A";
    btn1.style.backgroundColor = "#EAC67A";
    btn2.style.backgroundColor = "#EAC67A";
    btn3.style.backgroundColor = "#EAC67A";
}

function item() {
    alert("Item feature not yet added.");
}

function inspect() {
    alert("Inspect feature not yet added.");
}