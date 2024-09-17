function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5VAeynQxrTT":
        Script1();
        break;
      case "635Fvogzkch":
        Script2();
        break;
      case "5jjvX9wGEOj":
        Script3();
        break;
      case "69UhDMNhHNG":
        Script4();
        break;
      case "6n2zbwuVxA4":
        Script5();
        break;
      case "6DG1sd2lz47":
        Script6();
        break;
      case "6A177J7mRKK":
        Script7();
        break;
      case "5mvj8mxAEg1":
        Script8();
        break;
      case "6WE24xjuhr3":
        Script9();
        break;
      case "6KJcXr9bJ3Z":
        Script10();
        break;
      case "5jywwASgbbI":
        Script11();
        break;
      case "6r1I2RhsX55":
        Script12();
        break;
  }
}

function Script1()
{
  //load the scripts dynamically into the head of the document
function add_line() {
    var line = document.createElement("audio");
    var head=document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src="";
    line.id="bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
var audio = document.getElementById('bgSong');
audio.volume = 1.0;
}

}

function Script2()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"Egmont Overture Finale.mp3";
audio.load();
audio.play();
}

function Script3()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location + "RetroFuture Clean.mp3";
audio.load();
audio.play();
}

function Script4()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location + "Unwritten Return.mp3";
audio.load();
audio.play();
}

function Script5()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location + "Whiskey on the Mississippi.mp3";
audio.load();
audio.play();
}

function Script6()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script7()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.2;
}

function Script8()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.4;
}

function Script9()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.6;
}

function Script10()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.8;
}

function Script11()
{
  var audio = document.getElementById('bgSong');
audio.volume = 1.0;
}

function Script12()
{
  //load the scripts dynamically into the head of the document
function add_line() {
 var line = document.createElement("audio");
 var head=document.getElementsByTagName('body')[0];
 line.type = "audio/mp3";
 line.src="";
 line.id="bgSong" ;
 line.autoplay = true;
 line.loop = true;
 head.appendChild(line);
}
//but we only want to add these once!
if(document.getElementById('bgSong')==null){
 add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.5;
}
}

