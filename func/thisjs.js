// this references the object that is executing the current function 
//if function is not related to any object it refers to global object

const video  = {
    title: 'a',
    play(){
        console.log(this);
    }
};

video.stop = function(){
    console.log(this);
};

video.stop();

function Video(){
    console.log(this)
}

playVideo()