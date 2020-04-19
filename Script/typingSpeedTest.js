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
 const word = {typed:0,correct:0,incorrect:0,totoal:0};

 // It is random function :which is generate & return random number 
 //according to argument given to it:
const random = (n) =>{
 return  Math.floor(Math.random()*n) ;
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

const count = (time,textArea,header2,word) =>{

    //It will create time stamp when user Done:
    let now = new Date();
    //It will get time from time stamp & store to time object :
     time.finial = now.getTime();
    
    //It will collect user typed string/paragraph & store to text variable
     let  text = textArea.value ;
    
    //It convert typed string/paragraph to words & store into word object : 
     word.typed = text.split(' ').length ;
 
     // It will collect Display paragraph/string & store to text2 variable
     let text2 =  header2.innerText ;
  
    //It will convert render string/paragraph  to words & store into word object :  
      word.total = text2.split(' ').length ;

    
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
      
        count(time,textArea,header2);

      }
}
 
 btn.addEventListener('click',START);

