let currentPage = 0;


const pages = document.querySelectorAll(".page");

const music = document.getElementById("music");


let isPlaying = false;



function startStory(){

    if(!isPlaying){

        music.play();

        isPlaying = true;

    }


    nextPage();

}




function nextPage(){


    if(currentPage < pages.length - 1){


        pages[currentPage].classList.remove("active");


        currentPage++;


        pages[currentPage].classList.add("active");


    }

}




function toggleMusic(){


    if(isPlaying){


        music.pause();

        isPlaying = false;


    }

    else{


        music.play();

        isPlaying = true;


    }

}
