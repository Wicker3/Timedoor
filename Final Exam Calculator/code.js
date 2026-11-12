var display = "";
var x = 0;
var a = 0;
var b = 0;
var calculations = 0;
var symbol = 0;

function DISPLAY() 
{
    var calculation = document.getElementById("calculation");
    calculation.textContent = display;
}

function O0() 
{
    console.log("0");
    display += "0";
    DISPLAY();
    x *= 10;
    x += 0;
}

function O1() 
{
    console.log("1");
    display += "1";
    DISPLAY();
    x *= 10;
    x += 1;
}

function O2() 
{
    console.log("2");
    display += "2";
    DISPLAY();
    x *= 10;
    x += 2;
}

function O3() 
{
    console.log("3");
    display += "3";
    DISPLAY();
    x *= 10;
    x += 3;
}

function O4() 
{
    console.log("4");
    display += "4";
    DISPLAY();
    x *= 10;
    x += 4;
}

function O5() 
{
    console.log("5");
    display += "5";
    DISPLAY();
    x *= 10;
    x += 5;
}

function O6() 
{
    console.log("6");
    display += "6";
    DISPLAY();
    x *= 10;
    x += 6;
}

function O7() 
{
    console.log("7");
    display += "7";
    DISPLAY();
    x *= 10;
    x += 7;
}

function O8() 
{
    console.log("8");
    display += "8";
    DISPLAY();
    x *= 10;
    x += 8;
}

function O9() 
{
    console.log("9");
    display += "9";
    DISPLAY();
    x *= 10;
    x += 9;
}

function PLUS() 
{
    CHECK();
    console.log("+");
    display += "+";
    symbol = 1;
    DISPLAY();
    if (a == 0)
    {
        console.log("RAN A")
        a = x;
        x = 0;
    }
}

function MINUS() 
{
    CHECK();
    console.log("-");
    display += "-";
    symbol = 2;
    DISPLAY();
    if (a == 0)
    {
        a = x;
        x = 0;
    }
}

function MULTIPLY() 
{
    CHECK();
    console.log("X");
    display += "X";
    symbol = 3;
    DISPLAY();
    if (a == 0)
    {
        a = x;
        x = 0;
    }
}

function DIVIDE() 
{
    CHECK();
    console.log("/");
    display += "/";
    symbol = 4;
    DISPLAY();
    if (a == 0)
    {
        a = x;
        x = 0;
    }
}

function DECIMAL() 
{
    console.log(".")
    display += ".";
    DISPLAY();
}

function POSITIVE_NEGATIVE() 
{
    console.log("+/-")
    display += "+/-";
    DISPLAY();
}

function ANSWEAR() 
{
    console.log("ANS");
    display += "ANS";
    DISPLAY();
}

function EQUAL() 
{
    console.log("=");
    display += "=";
    CHECK();
    display += calculations;
    DISPLAY();
}

function DEL() 
{
    console.log("DELETE");
    display += "DELETE";
    DISPLAY();
}

function AC() 
{
    console.log("CLEAR");
    x = 0;
    a = 0;
    b = 0;
    calculations = 0;
    DISPLAY();
}

function CHECK() {
    if (a != 0)
    {
        if (x != 0)
        {
            b = x;
        }
        console.log("RAN B")
        b = x;
        x = 0;
        if (symbol == 1) {
            calculations += a + b;
        }
        if (symbol == 2) {
            calculations += a - b;
        }
        if (symbol == 3) {
            calculations += a * b;
        }
        if (symbol == 4) {
            calculations += a / b;
        }
        a = calculations;
        b = 0;
        console.log(calculations);
    }
}

DISPLAY();