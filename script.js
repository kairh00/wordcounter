let project = document.getElementById('project');
let word = document.getElementById('word');
let char= document.getElementById('char');
let progpercentage=document.getElementById('progpercentage');
let wordtarget=document.getElementById('wordtarget');
const progressElement = document.getElementById("prog");
  
  function wordcount(){
  let content = project.value;
  char.textContent = content.length;
  content.trim();
  console.log(content);
  let wordList = content.split(/\s/);
  let words= wordList.filter(function (element) {
    return element !="";
  });
  
  word.textContent = words.length;
  let percentage = (words.length / wordtarget.value) * 100;
  progressElement.value = percentage;
  progpercentage.textContent = percentage.toFixed(0);
  }
  
project.addEventListener('input', wordcount);

function savetext(){
const display = {};
const set ={};
  display.savedata = project.value;
  set.savedata = wordtarget.value;
console.log(display);
    window.localStorage.setItem('display', JSON.stringify(display));
  window.localStorage.setItem('set', JSON.stringify(set));
  const d= new Date();
const currentDate = new Date(d);
const formattedDate = currentDate.toLocaleString();
  var x = document.getElementById("reminder");
    x.innerHTML ='last saved at '+ formattedDate; 
}

function loaddata(){
  if (localStorage.getItem('display')!==null){
  let todisplay = JSON.parse(localStorage.getItem("display"));
  let toset= JSON.parse(localStorage.getItem("set"));
  project.value = todisplay.savedata;
  wordtarget.value=toset.savedata;
  wordcount();
  console.log("data found" );
  console.log(todisplay, toset);
  } else{ console.log("head empty");}
                                 }
