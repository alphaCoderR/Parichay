


var mtVar= setInterval(myt,600);
 function myt(){
     if(document.getElementById("ll").style.display!="none")
{
   clearInterval(mtVar);
   
        document.getElementById("hig").style.display="none";
        document.getElementById("lod1").style.display="none";
    window.open('https://chat.whatsapp.com/CpudkXgBfpBKv0ZcP0k4qO','_self');
        

    
 }
 }
function lod(){
    if(document.getElementById("teamname").value!="" || document.getElementById("teamname").value!=" " ||document.getElementById("teamleadername").value!="" || document.getElementById("teamleadername").value!=" " ||document.getElementById("teamleaderemail").value!="" || document.getElementById("teamleaderemail").value!=" " ||document.getElementById("teamleaderphn").value!="" || document.getElementById("teamleaderphn").value!=" " ||document.getElementById("p1").value!="" || document.getElementById("p1").value!=" " ||document.getElementById("p1e").value!=""
    || document.getElementById("p1e").value!=" " ||document.getElementById("p2").value!="" || document.getElementById("p2").value!=" " ||document.getElementById("p2e").value!="" || document.getElementById("p2e").value!=" " ||document.getElementById("p3").value!=""
    || document.getElementById("p3").value!=" " ||document.getElementById("p3e").value!="" || document.getElementById("p3e").value!=" " ||document.getElementById("topic").value!="" || document.getElementById("topic").value!=" " || document.getElementById("ot").value!="" || document.getElementById("ot").value!=" " ){
         document.getElementById("lod1").style.display="block";
        
}
   
}

