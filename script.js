const taskloist=[]
const listElement=document.getElementById("tasklist");
const status=document.getElementById("status");

//speech Recognition

const speechRecognition=window.speechRecognition;
const recognition=new speechRecognition();
recognition.continuous=false;