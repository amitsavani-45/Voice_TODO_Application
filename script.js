const taskloist=[]
const listElement=document.getElementById("tasklist");
const status=document.getElementById("status");

//setup speech Recognition

const speechRecognition=window.speechRecognition;
const recognition=new speechRecognition();
recognition.continuous=false;
recognititon.lang='en-US';

recognition.onresult=(event) =>{
    const transcript=event.results[0][0].transcript.toLowerCase();
    statusText.innerText=`Heard: "${transcript}"`
    if(transcript.startWith("naya task")){
        const tasktext=transcript.replace()("nayay task","").trim();
        if(tasktext)
             addTask(taskText);
    }
    else if(transcript.startsWith("deletr task")){
        const num=parsenInr(transcript.split("")[2])-1;
        if(!isNaN(num))
        deleteTask(num);
}
else if(transcript.startWith("mark task")){
       const num=parsenInr(transcript.split("")[2])-1;
       if(!isNaN(num))
       markTaskDone(num);
}
}
function addTask(task){

}
function deleteTask(num){
    
}