var mouseEvent = "empty";
var last_position_of_x,last_position_of_y;

Canvas = document.getElementById ("myCanvas");
color = "cyan";
width = 3;
ctx = Canvas.getContext("2d");

Canvas.addEventListener("mouseDown", MD);

function MD(e)
{
    //color = document.getElementById
    mouseEvent = "mouseDown";
}
Canvas.addEventListener("mouseleave", ML);

function ML(e)
{
    //color = document.getElementById
    mouseEvent = "mouseleave";
}
Canvas.addEventListener("mouseup", MU);

function MU(e)
{
    //color = document.getElementById
    mouseEvent = "mouseup";
}
Canvas.addEventListener("mousemove", MM);

function MM(e)
{
    current_position_of_mouse_x = e.clientX - Canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - Canvas.offsetTop;

    if (mouseEvent == "mouseDown") 
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        console.log("Last Position of X & Y Co-ordinates = ");
        console.log("X = " + last_position_of_x + ", Y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);

        console.log("Current Position of X & Y Co-ordinates = ");
        console.log("X = " + current_position_of_mouse_x + ", Y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}