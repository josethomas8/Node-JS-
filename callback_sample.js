
function longTask(miliSecound){
    dt=new Date
    while((new Date-dt) <= miliSecound){

    }
}
function showEnd(){
    console.log('End')
}

console.log('started1')
setTimeout(showEnd,2000)


console.log('started2')
setTimeout(showEnd,2000)


console.log('started3')
setTimeout(showEnd,2000)

