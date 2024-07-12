const date = " 12 july 2024 3:00 PM"
document.getElementById("enddate").innerText= date;
const input = document.getElementById("input");
function countdown (){
    const end = new Date(date)
    const now = new Date()
    const diffr = (end - now)/1000;
  if (diffr<0) returns;
    console.log(diffr);
    inputs[0].value=Math.floor(diffr/3600/24);
    inputs[1].value=Math.floor(diffr/3600)%24;
    inputs[2].value=Math.floor(diffr/60)%60;
    inputs[3].value=Math.floor(diffr)%60;

}
countdown();
 setInterval(
    ()=>{
        countdown()

    },1000

)