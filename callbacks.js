function moreCowBell(callback){
    callback();
}

function moreCallback(callback){
    moreCowBell(callback);
}

function anotherCallback(callback){
    moreCallback(callback);
}

function useCallback(callback){
    anotherCallback(callback);
}

useCallback(function(){
    console.log("Three callbacks and a cow bell deep!!");
})