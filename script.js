let currentPage = 0;


const pages = document.querySelectorAll(".page");


const music = document.getElementById("bgMusic");


let musicPlaying = false;





// 第一页按钮

function startStory(){


    if(!musicPlaying){


        music.play();


        musicPlaying = true;


    }


    nextPage();


}






// 下一页

function nextPage(){


    if(currentPage < pages.length - 1){


        pages[currentPage].classList.remove("active");


        currentPage++;


        pages[currentPage].classList.add("active");


    }


}







// 音乐按钮

function musicControl(){


    if(musicPlaying){


        music.pause();


        musicPlaying = false;



    }else{


        music.play();


        musicPlaying = true;


    }


}
