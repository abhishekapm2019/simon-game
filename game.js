var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started=false;
var level=0;
function nextSequence(){
	userClickedPattern=[];
	level++;
	var randomNumber = Math.round(3*Math.random());
	for(var i=0; i<=randomNumber;i++){
	var randomChosenColour = buttonColours[i];}
	gamePattern.push(randomChosenColour);
	$("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    $("h1").text("Level "+level);
}
$(".btn").click(function(){
     var userChosenColor=this.id;
     userClickedPattern.push(userChosenColor);
     playSound(userChosenColor);
     animatePress(userChosenColor);
     checkAnswer(userClickedPattern.length-1);
 });
function playSound(name){
	var audio=new Audio("sounds/"+name+".mp3");
	audio.play();
}
function animatePress(currentColour){
     $("#"+currentColour).addClass("pressed");
     setTimeout(function(){
     	$("#"+currentColour).removeClass("pressed");

     },100);
}
$(document).keypress(function(){
	if(!started){
		nextSequence();
		started=true;
	}
})
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    	console.log("success");
	if(userClickedPattern.length === gamePattern.length){
		setTimeout(function () {
          nextSequence();
        }, 1000);
	}
    }
    else{
    	audio=new Audio("sounds/wrong.mp3");
    	audio.play();
    	$("body").addClass("game-over");
    	setTimeout(function(){
    		$("body").removeClass("game-over");
    	},200);
    	$("h1").text("Game Over, Press Any Key to Restart");
    	startOver();
    }  
}

function startOver(){
	level=0;
	gamePattern=[];
	started=false;
}