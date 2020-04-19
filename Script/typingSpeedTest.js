console.log("This is javascript :");

// It is array of paragraphs.
 const para = [`Stimulate your mind as you test your 
 typing speed with this standard English paragraph typing 
 test. Watch your typing speed and accuracy increase as
 you learn about a variety of new topics! Over 40 typing 
 test selections available.`,`If you don't like a test prompt,
 you can get a different (random) prompt with the  "change test" 
  button - or select a specific paragraph to type from the list 
 below. To find out how fast you type, just start typing in the 
 blank textbox on the right of the test prompt.`,`You will see your 
 progress, including errors on the left side as you type. In order 
 to complete the test and save your score, you need to get 100% 
 accuracy. You can fix errors as you go, or correct them at the 
 end with the help of the spell checker.`] ;
 //It is button object (Element having either class or id value : btn) 
 const btn =  document.querySelector('#btn');

 //It is header2 object (Element having either class or id value : header2) 
 const h2  =  document.querySelector('#header2');
 
 //It is header1 object (Element having either class or id value : header1) 
 const h1  =  document.querySelector('#header1');
 
 //It is textArea object (Element having either class or id value : textArea) 
 const textArea = document.querySelector('#textArea');

 // It is time object ,It stores time related information :
 const time = {initial:0,finial:0,total:0};

//IT is word object ,it store words related information : 
 const word = {typed:0,correct:0,incorrect:0,total:0};

const speed = {net:0,gross:0,}; 
 // It is random function :which is generate & return random number 
 //according to argument given to it:
const random = (n) =>{
 return  Math.floor(Math.random()*n) ;
}

const grossSpeed = (time,word) =>{

  let speed = ((word.typed / time.total) * 60) ;  
 console.log("Your gross Speed :",speed);
 return speed ;
}

const calculateTotalTime = (time) =>{
    total  = ((time.finial - time.initial) / 1000) // the time is in milliseconds & we have to convert it into Seconds: 
    console.log("total time",total); 
    return total;
}

//It is display function , It is taking four argument :
//First one array of paragraph:
//2nd one random number:
//3rd one position:means where to display paragraphs:
//4th textArea : where user type paragraphs :
const Display = (para,random,position,textArea) => {
   
    //It will change HTML of position object according to para array:
    position.innerHTML = para[random];
   
   //It will activate textArea object,so that user can type paragraphs:
    textArea.disabled = false;

}

const count = (time,textArea,header2,word) => {

      //It will create time stamp when user Done:
       let now = new Date();
    
     //It will get time from time stamp & store to time object :
      time.finial = now.getTime();
    
      //It will collect user typed string/paragraph & store to text variable
       const  text = textArea.value ;
    
     //It convert typed string/paragraph to words & store into array:
       const typedWords = text.split(' ');
    
     //It store total typed words into words object: 
       word.typed = typedWords.length ;
 
     // It will collect Display paragraph/string & store to text2 variable
      const text2 =  header2.innerText ;
    
    //It will convert render string/paragraph  to words & store into array :  
      const displayWords =  text2.split(' ');             
       
    //It store total display words into words object :
      word.total = text2.split(' ').length ;

    
      // total typed correct count algortithm :
      let correct = 0 ;
     
      // Iterating displayWords array through for Each method (google it if you don't know :) :
      displayWords.forEach(function(word,index){
         
         //if displayWords and Typed words match then it will increment correct variable :  
          if(word === typedWords[index])
           correct++;
      });
   
    //Storing  total no's of correct words to word object:
      word.correct = correct ;
 
    //Storing  total no's of incorrect words to word object: 
      word.incorrect = word.typed - word.correct ;
   console.log("typed words",typedWords);
   console.log("displaed Words",displayWords)   
  console.log("total typed correct words:",correct);
  console.log("time:" ,time);
  console.log("word :",word);

}

//It is START function , it will run when user hit start button object : 
const START = (eventObject) =>{
     
    //It will check whether target element having start text or not:
    //if yes then execute all code inside the if block :
    //otherwise execute all codes inside the else block :
      if(eventObject.target.innerText === "Start"){
         //It will create time Stamp : 
          let now = new Date();
         
          //It will collect time from time Stamp & store to time object: 
          time.initial = now.getTime(); 
         
          //calling display function and passing necessary arguments :
          Display(para,random(para.length),h2,textArea);
          
         //Changing text of target element :
          eventObject.target.innerText = "Done";  
       }else{
      
        count(time,textArea,header2,word);
         time.total = calculateTotalTime(time);
        speed.gross = grossSpeed(time,word);
      }
}
 
 btn.addEventListener('click',START);

