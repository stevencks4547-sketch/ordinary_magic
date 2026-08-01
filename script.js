let currentPage = 0;


const pages = document.querySelectorAll(".story");


const music = document.getElementById("bgMusic");


let musicPlaying = false;



// Start story + music

function startStory(){

    if(!musicPlaying){

        music.play();

        musicPlaying = true;

    }


    nextPage();

}





// Change page


function nextPage(){


    if(currentPage < pages.length - 1){


        pages[currentPage]
        .classList.remove("active");


        currentPage++;


        pages[currentPage]
        .classList.add("active");


    }


}







// Music control


function toggleMusic(){


    if(musicPlaying){


        music.pause();


        musicPlaying = false;



    }else{


        music.play();


        musicPlaying = true;


    }


}
