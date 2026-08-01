let currentPage = 0;


const pages = document.querySelectorAll(".page");


const music = document.getElementById("music");


let playing = false;





// 开始故事

function start(){


    if(!playing){


        music.play();


        playing = true;


    }


    next();


}






// 下一页

function next(){


    if(currentPage < pages.length - 1){


        pages[currentPage]
        .classList.remove("active");



        currentPage++;



        pages[currentPage]
        .classList.add("active");


    }


}






// 音乐控制


function toggleMusic(){


    if(playing){


        music.pause();


        playing = false;



    }else{


        music.play();


        playing = true;


    }


}
