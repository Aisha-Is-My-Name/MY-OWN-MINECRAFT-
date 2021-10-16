canvas=new fabric.Canvas("myCanvas");
block_width=30;
block_height=30;
player_x=10;
player_y=10;
player_object="";
block_object="";


function player_update(){
    fabric.Image.fromURL("player.png", function(img){
        player_object=img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x,

        });
        canvas.add(player_object);

    });
}
    function new_image(get_image){
        fabric.Image.fromURL(get_image, function(img){
            block_object=img;
            block_object.scaleToWidth(block_width);
            block_object.scaleToHeight(block_height);
            block_object.set({
                top:player_y,
                left:player_x,
    
            });
            canvas.add(block_object);
            
        });
    }
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey==true && keypressed=="80")
    {
        block_width=block_width+10;
        block_height=block_height+10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
        console.log("shift+p keys are pressed together");


    }
    if(e.shiftKey==true && keypressed=="77")
    {
        block_width=block_width-10;
        block_height=block_height-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
        console.log("shift+m keys are pressed together");


    }
    if(keypressed=="37"){
        console.log("left arrow key is pressed");
        move_left();

    }
    if(keypressed=="38"){
        console.log("up arrow key is pressed");
        move_up();
        
    }
    if(keypressed=="39"){
        console.log("right arrow key is pressed");
        move_right();
        
    }  
    if(keypressed=="40"){
        console.log("down arrow key is pressed");
        move_down();
        
    }
    if(keypressed=="87"){
        console.log("w key is pressed");
        new_image("wall.jpg");
        
    }
    if(keypressed=="71"){
        console.log("g key is pressed");
        new_image("ground.png");
        
    }
    if(keypressed=="76"){
        console.log("l key is pressed");
        new_image("light_green.png");
        
    }
    if(keypressed=="84"){
        console.log("t key is pressed");
        new_image("trunk.jpg");
        
    }
    if(keypressed=="82"){
        console.log("r key is pressed");
        new_image("roof.jpg");
        
    }
    if(keypressed=="89"){
        console.log("y key is pressed");
        new_image("yellow_wall.png");
        
    }
    if(keypressed=="68"){
        console.log("d key is pressed");
        new_image("dark_green.png");
        
    }
    if(keypressed=="67"){
        console.log("c key is pressed");
        new_image("cloud.jpg");
        
    }
    if(keypressed=="85"){
        console.log("u key is pressed");
        new_image("unique.png");
        
    }
}
function move_up(){
if(player_y>0){
    player_y=player_y-block_height;
    console.log("new cordinates are x="+player_x+" y="+player_y);
    canvas.remove(player_object);
    player_update();
    

    
}
}

function move_down(){
    if(player_y<460){
        player_y=player_y+block_height;
        console.log("new cordinates are x="+player_x+" y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function move_left(){
    if(player_x>0){
        player_x=player_x-block_width;
        console.log("new cordinates are x="+player_y+" y="+player_x);
        canvas.remove(player_object);
        player_update();
    }
}

function move_right(){
    if(player_x<650){
        player_x=player_x+block_width;
        console.log("new cordinates are x="+player_x+" y="+player_y);
        canvas.remove(player_object);
        player_update();

    }
}