score=0;

function update_score(){
    score=score+1;
    document.getElementById("display_score").innerHTML="Score:"+score;
}

function save_score(){
    localStorage.setItem("Score", score);
}

 function next_page(){
 window.location="activity_2.html";
 }

 function back_page(){
    window.location="activity_1.html";
    }

function get_score(){
  
}