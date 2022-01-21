var one, two, three, four, five, six, seven, eight, nine, blank, correctPatternOfBox, randomPosition;
var  validate = 100;

function puzzleShuffle() {
    var correctPatternOfBox, randomPosition;
    validate = 100;

    correctPatternOfBox = [];

    while(correctPatternOfBox.length < 9) {
        randomPosition = Math.round(Math.random() * 100);
        if ((randomPosition == 1) || (randomPosition == 2) || (randomPosition == 3) ||
         (randomPosition == 4) || (randomPosition == 5) || (randomPosition == 6) || (randomPosition == 7) || (randomPosition == 8) || (randomPosition == 9)) {
            if  (!correctPatternOfBox.includes(randomPosition)) {
                correctPatternOfBox[correctPatternOfBox.length] = randomPosition;
            }
        }
    }
    
    document.getElementById('box1').textContent = correctPatternOfBox[0];
    document.getElementById('box1').style.background = 'url(images/' + correctPatternOfBox[0] + '.jpg)';
    document.getElementById("box1").style.backgroundSize = "150px 150px";

    document.getElementById('box2').textContent = correctPatternOfBox[1];
    document.getElementById('box2').style.background = 'URL(images/' + correctPatternOfBox[1] + '.jpg)';
    document.getElementById("box2").style.backgroundSize = "150px 150px";
    
    document.getElementById('box3').textContent = correctPatternOfBox[2];
    document.getElementById('box3').style.background = 'URL(images/' + correctPatternOfBox[2] + '.jpg)';
    document.getElementById("box3").style.backgroundSize = "150px 150px";
    
    document.getElementById('box4').textContent = correctPatternOfBox[3];
    document.getElementById('box4').style.background = 'URL(images/' + correctPatternOfBox[3] + '.jpg)';
    document.getElementById("box4").style.backgroundSize = "150px 150px";
    
    document.getElementById('box5').textContent = correctPatternOfBox[4];
    document.getElementById('box5').style.background = 'URL(images/' + correctPatternOfBox[4] + '.jpg)';
    document.getElementById("box5").style.backgroundSize = "150px 150px";
    
    document.getElementById('box6').textContent = correctPatternOfBox[5];
    document.getElementById('box6').style.background = 'URL(images/' + correctPatternOfBox[5] + '.jpg)';
    document.getElementById("box6").style.backgroundSize = "150px 150px";
    
    document.getElementById('box7').textContent = correctPatternOfBox[6];
    document.getElementById('box7').style.background = 'URL(images/' + correctPatternOfBox[6] + '.jpg)';
    document.getElementById("box7").style.backgroundSize = "150px 150px";
    
    document.getElementById('box8').textContent = correctPatternOfBox[7];
    document.getElementById('box8').style.background = 'URL(images/' + correctPatternOfBox[7] + '.jpg)';
    document.getElementById("box8").style.backgroundSize = "150px 150px";
    
    document.getElementById('box9').textContent = correctPatternOfBox[8];
    document.getElementById('box9').style.background = 'URL(images/' + correctPatternOfBox[8] + '.jpg)';
    document.getElementById("box9").style.backgroundSize = "150px 150px";
}

function moveImages(click) {

    correctPatternOfBox = [];

    while(correctPatternOfBox.length < 9) {
        randomPosition = Math.round(Math.random() * 100);
        if ((randomPosition == 1) || (randomPosition == 2) || (randomPosition == 3) ||
         (randomPosition == 4) || (randomPosition == 5) || (randomPosition == 6) || (randomPosition == 7) || (randomPosition == 8) || (randomPosition == 9)) {
            if  (!correctPatternOfBox.includes(randomPosition)) {
                correctPatternOfBox[correctPatternOfBox.length] = randomPosition;
            }
        }
    } 

    one = document.getElementById('box1').textContent;
    two = document.getElementById('box2').textContent;
    three = document.getElementById('box3').textContent;
    four = document.getElementById('box4').textContent;
    five = document.getElementById('box5').textContent;
    six = document.getElementById('box6').textContent;
    seven = document.getElementById('box7').textContent;
    eight = document.getElementById('box8').textContent;
    nine = document.getElementById('box9').textContent;
    blank = 9;

    if ((one == 1) && (two == 2) && (three == 3) && (four == 4) && (five == 5) && (six == 6) && (seven == 7) && (eight == 8) && (nine == 9) && (validate == 100)) {
        alert('You win !');  
    } else {
        validate = 100;
        if (click == 1) {
            if (two == blank) {
                //console.log("move to 2");
                document.getElementById('box1').textContent = two;
                document.getElementById('box2').textContent = one;
                document.getElementById('box1').style.background = 'url(images/' + two + '.jpg)';
                document.getElementById('box2').style.background = 'url(images/' + one + '.jpg)';
                document.getElementById("box1").style.backgroundSize = "150px 150px";
                document.getElementById("box2").style.backgroundSize = "150px 150px";
            } else if (four == blank) {
                //console.log("move to 4");
                document.getElementById('box1').textContent = four;
                document.getElementById('box4').textContent = one;
                document.getElementById('box1').style.background = 'url(images/' + four + '.jpg)';
                document.getElementById('box4').style.background = 'url(images/' + one + '.jpg)';
                document.getElementById("box1").style.backgroundSize = "150px 150px";
                document.getElementById("box4").style.backgroundSize = "150px 150px";
            } else {
                // nothing
            }
        } else if (click == 2) {
            if (one == blank) {
                //console.log("move to 1");
                document.getElementById('box2').textContent = one;
                document.getElementById('box1').textContent = two;
                document.getElementById('box2').style.background = 'url(images/' + one + '.jpg)';
                document.getElementById('box1').style.background = 'url(images/' + two + '.jpg)';
                document.getElementById("box2").style.backgroundSize = "150px 150px";
                document.getElementById("box1").style.backgroundSize = "150px 150px";
            } else if (three == blank) {
                //console.log("move to 3");
                document.getElementById('box2').textContent = three;
                document.getElementById('box3').textContent = two;
                document.getElementById('box2').style.background = 'url(images/' + three + '.jpg)';
                document.getElementById('box3').style.background = 'url(images/' + two + '.jpg)';
                document.getElementById("box2").style.backgroundSize = "150px 150px";
                document.getElementById("box3").style.backgroundSize = "150px 150px";
            } else if (five == blank) {
                //console.log("move to 5");
                document.getElementById('box2').textContent = five;
                document.getElementById('box5').textContent = two;
                document.getElementById('box2').style.background = 'url(images/' + five + '.jpg)';
                document.getElementById('box5').style.background = 'url(images/' + two + '.jpg)';
                document.getElementById("box2").style.backgroundSize = "150px 150px";
                document.getElementById("box5").style.backgroundSize = "150px 150px";
            } else {
                // nothing
            }
        } else if (click == 3) {
            if (two == blank) {
                //console.log("move to 2");
                document.getElementById('box3').textContent = two;
                document.getElementById('box2').textContent = three;
                document.getElementById('box3').style.background = 'url(images/' + two + '.jpg)';
                document.getElementById('box2').style.background = 'url(images/' + three + '.jpg)';
                document.getElementById("box3").style.backgroundSize = "150px 150px";
                document.getElementById("box2").style.backgroundSize = "150px 150px";
            } else if (six == blank) {
                //console.log("move to 6");
                document.getElementById('box3').textContent = six;
                document.getElementById('box6').textContent = three;
                document.getElementById('box3').style.background = 'url(images/' + six + '.jpg)';
                document.getElementById('box6').style.background = 'url(images/' + three + '.jpg)';
                document.getElementById("box3").style.backgroundSize = "150px 150px";
                document.getElementById("box6").style.backgroundSize = "150px 150px";
            } else {
                // nothing
            }
        } else if (click == 4) {
            if (one == blank) {
                //console.log("move to 1");
                document.getElementById('box4').textContent = one;
                document.getElementById('box1').textContent = four;
                document.getElementById('box4').style.background = 'url(images/' + one + '.jpg)';
                document.getElementById('box1').style.background = 'url(images/' + four + '.jpg)';
                document.getElementById("box4").style.backgroundSize = "150px 150px";
                document.getElementById("box1").style.backgroundSize = "150px 150px";
            } else if (five == blank) {
                //console.log("move to 5");
                document.getElementById('box4').textContent = five;
                document.getElementById('box5').textContent = four;
                document.getElementById('box4').style.background = 'url(images/' + five + '.jpg)';
                document.getElementById('box5').style.background = 'url(images/' + four + '.jpg)';
                document.getElementById("box4").style.backgroundSize = "150px 150px";
                document.getElementById("box5").style.backgroundSize = "150px 150px";
            } else if (seven == blank) {
                //console.log("move to 7");
                document.getElementById('box4').textContent = seven;
                document.getElementById('box7').textContent = four;
                document.getElementById('box4').style.background = 'url(images/' + seven + '.jpg)';
                document.getElementById('box7').style.background = 'url(images/' + four + '.jpg)';
                document.getElementById("box4").style.backgroundSize = "150px 150px";
                document.getElementById("box7").style.backgroundSize = "150px 150px";
            } else {
                // nothing
            }
        } else if (click == 5) {
            if (two == blank) {
                //console.log("move to 2");
                document.getElementById('box5').textContent = two;
                document.getElementById('box2').textContent = five;
                document.getElementById('box5').style.background = 'url(images/' + two + '.jpg)';
                document.getElementById('box2').style.background = 'url(images/' + five + '.jpg)';
                document.getElementById("box5").style.backgroundSize = "150px 150px";
                document.getElementById("box2").style.backgroundSize = "150px 150px";
            } else if (four == blank) {
                //console.log("move to 4");
                document.getElementById('box5').textContent = four;
                document.getElementById('box4').textContent = five;
                document.getElementById('box5').style.background = 'url(images/' + four + '.jpg)';
                document.getElementById('box4').style.background = 'url(images/' + five + '.jpg)';
                document.getElementById("box5").style.backgroundSize = "150px 150px";
                document.getElementById("box4").style.backgroundSize = "150px 150px";
            } else if (six == blank) {
                //console.log("move to 6");
                document.getElementById('box5').textContent = six;
                document.getElementById('box6').textContent = five;
                document.getElementById('box5').style.background = 'url(images/' + six + '.jpg)';
                document.getElementById('box6').style.background = 'url(images/' + five + '.jpg)';
                document.getElementById("box5").style.backgroundSize = "150px 150px";
                document.getElementById("box6").style.backgroundSize = "150px 150px";
            } else if (eight == blank) {
                //console.log("move to 8");
                document.getElementById('box5').textContent = eight;
                document.getElementById('box8').textContent = five;
                document.getElementById('box5').style.background = 'url(images/' + eight + '.jpg)';
                document.getElementById('box8').style.background = 'url(images/' + five + '.jpg)';
                document.getElementById("box5").style.backgroundSize = "150px 150px";
                document.getElementById("box8").style.backgroundSize = "150px 150px";
            } else {
                // nothing
            }
        } else if (click == 6) {
            if (three == blank) {
                //console.log("move to 3");
                document.getElementById('box6').textContent = three;
                document.getElementById('box3').textContent = six;
                document.getElementById('box6').style.background = 'url(images/' + three + '.jpg)';
                document.getElementById('box3').style.background = 'url(images/' + six + '.jpg)';
                document.getElementById("box6").style.backgroundSize = "150px 150px";
                document.getElementById("box3").style.backgroundSize = "150px 150px";
            } else if (five == blank) {
                //console.log("move to 5");
                document.getElementById('box6').textContent = five;
                document.getElementById('box5').textContent = six;
                document.getElementById('box6').style.background = 'url(images/' + five + '.jpg)';
                document.getElementById('box5').style.background = 'url(images/' + six + '.jpg)';
                document.getElementById("box6").style.backgroundSize = "150px 150px";
                document.getElementById("box5").style.backgroundSize = "150px 150px";
            } else if (nine == blank) {
                //console.log("move to 9");
                document.getElementById('box6').textContent = nine;
                document.getElementById('box9').textContent = six;
                document.getElementById('box6').style.background = 'url(images/' + nine + '.jpg)';
                document.getElementById('box9').style.background = 'url(images/' + six + '.jpg)';
                document.getElementById("box6").style.backgroundSize = "150px 150px";
                document.getElementById("box9").style.backgroundSize = "150px 150px";
            } else {
                // nothing
            }
        } else if (click == 7) {
            if (four == blank) {
                //console.log("move to 4");
                document.getElementById('box7').textContent = four;
                document.getElementById('box4').textContent = seven;
                document.getElementById('box7').style.background = 'url(images/' + four + '.jpg)';
                document.getElementById('box4').style.background = 'url(images/' + seven + '.jpg)';
                document.getElementById("box7").style.backgroundSize = "150px 150px";
                document.getElementById("box4").style.backgroundSize = "150px 150px";
            } else if (eight == blank) {
                //console.log("move to 8");
                document.getElementById('box7').textContent = eight;
                document.getElementById('box8').textContent = seven;
                document.getElementById('box7').style.background = 'url(images/' + eight + '.jpg)';
                document.getElementById('box8').style.background = 'url(images/' + seven + '.jpg)';
                document.getElementById("box7").style.backgroundSize = "150px 150px";
                document.getElementById("box8").style.backgroundSize = "150px 150px";
            } else {
                // nothing
            }
        } else if (click == 8) {
            if (seven == blank) {
                //console.log("move to 7");
                document.getElementById('box8').textContent = seven;
                document.getElementById('box7').textContent = eight;
                document.getElementById('box8').style.background = 'url(images/' + seven + '.jpg)';
                document.getElementById('box7').style.background = 'url(images/' + eight + '.jpg)';
                document.getElementById("box8").style.backgroundSize = "150px 150px";
                document.getElementById("box7").style.backgroundSize = "150px 150px";
            } else if (five == blank) {
                //console.log("move to 5");
                document.getElementById('box8').textContent = five;
                document.getElementById('box5').textContent = eight;
                document.getElementById('box8').style.background = 'url(images/' + five + '.jpg)';
                document.getElementById('box5').style.background = 'url(images/' + eight + '.jpg)';
                document.getElementById("box8").style.backgroundSize = "150px 150px";
                document.getElementById("box5").style.backgroundSize = "150px 150px";
            } else if (nine == blank) {
                //console.log("move to 9");
                document.getElementById('box8').textContent = nine;
                document.getElementById('box9').textContent = eight;
                document.getElementById('box8').style.background = 'url(images/' + nine + '.jpg)';
                document.getElementById('box9').style.background = 'url(images/' + eight + '.jpg)';
                document.getElementById("box8").style.backgroundSize = "150px 150px";
                document.getElementById("box9").style.backgroundSize = "150px 150px";
            } else {
                // nothing
            }
        } else if (click == 9) {
            if (six == blank) {
                //console.log("move to 6");
                document.getElementById('box9').textContent = six;
                document.getElementById('box6').textContent = nine;
                document.getElementById('box9').style.background = 'url(images/' + six + '.jpg)';
                document.getElementById('box6').style.background = 'url(images/' + nine + '.jpg)';
                document.getElementById("box9").style.backgroundSize = "150px 150px";
                document.getElementById("box6").style.backgroundSize = "150px 150px";
            } else if (eight == blank) {
                //console.log("move to 8");
                document.getElementById('box9').textContent = eight;
                document.getElementById('box8').textContent = nine;
                document.getElementById('box9').style.background = 'url(images/' + eight + '.jpg)';
                document.getElementById('box8').style.background = 'url(images/' + nine + '.jpg)';
                document.getElementById("box9").style.backgroundSize = "150px 150px";
                document.getElementById("box8").style.backgroundSize = "150px 150px";
            } else {
                validate = 100;
            }
        }
    }
}

function setAnswer() {
    var correctPatternOfBox;

    correctPatternOfBox = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    document.getElementById('box1').textContent = correctPatternOfBox[0];
    document.getElementById('box1').style.background = 'url(images/' + correctPatternOfBox[0] + '.jpg)';
    document.getElementById("box1").style.backgroundSize = "150px 150px";

    document.getElementById('box2').textContent = correctPatternOfBox[1];
    document.getElementById('box2').style.background = 'URL(images/' + correctPatternOfBox[1] + '.jpg)';
    document.getElementById("box2").style.backgroundSize = "150px 150px";
    
    document.getElementById('box3').textContent = correctPatternOfBox[2];
    document.getElementById('box3').style.background = 'URL(images/' + correctPatternOfBox[2] + '.jpg)';
    document.getElementById("box3").style.backgroundSize = "150px 150px";
    
    document.getElementById('box4').textContent = correctPatternOfBox[3];
    document.getElementById('box4').style.background = 'URL(images/' + correctPatternOfBox[3] + '.jpg)';
    document.getElementById("box4").style.backgroundSize = "150px 150px";
    
    document.getElementById('box5').textContent = correctPatternOfBox[4];
    document.getElementById('box5').style.background = 'URL(images/' + correctPatternOfBox[4] + '.jpg)';
    document.getElementById("box5").style.backgroundSize = "150px 150px";
    
    document.getElementById('box6').textContent = correctPatternOfBox[5];
    document.getElementById('box6').style.background = 'URL(images/' + correctPatternOfBox[5] + '.jpg)';
    document.getElementById("box6").style.backgroundSize = "150px 150px";
    
    document.getElementById('box7').textContent = correctPatternOfBox[6];
    document.getElementById('box7').style.background = 'URL(images/' + correctPatternOfBox[6] + '.jpg)';
    document.getElementById("box7").style.backgroundSize = "150px 150px";
    
    document.getElementById('box8').textContent = correctPatternOfBox[7];
    document.getElementById('box8').style.background = 'URL(images/' + correctPatternOfBox[7] + '.jpg)';
    document.getElementById("box8").style.backgroundSize = "150px 150px";
    
    document.getElementById('box9').textContent = correctPatternOfBox[8];
    document.getElementById('box9').style.background = 'URL(images/' + correctPatternOfBox[8] + '.jpg)';
    document.getElementById("box9").style.backgroundSize = "150px 150px"; 
    validate = 99;
    one = 99;
}
