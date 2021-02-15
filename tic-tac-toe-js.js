var win = [ [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]];
var botTern=[];
var playerTern=[];
var array = [0,1,2,3,4,5,6,7,8];
var round = 0;
function addX(evt){
    evt.currentTarget.src= 'http://upload.wikimedia.org/wikipedia/en/a/ad/X_cover.png';
    evt.currentTarget.removeEventListener('click', addX);
    var x  = parseInt(evt.currentTarget.id);
    del(x);
    
    playerTern.push(x)
    
    
    round+=1;
    console.log("Round : "+round);
    if(round>=3 && checkwin()==true){
        checkwin();
        return 0;
    }else if(round>=5) {
        return document.getElementById('score1').innerHTML="draw";
    }
    var rand = array[Math.floor(Math.random() * array.length)];
    botTern.push(rand);
    del(rand);
    const image = document.getElementById(rand);
    image.src = 'https://oer.learn.in.th/search_detail/ZipDownload/23599';
    image.removeEventListener('click', addX);
    console.log("Conputer walk : "+botTern);
    console.log("Player walk : "+playerTern);
    console.log("sum="+checkwin());
    
}

function del(num){
    const index = array.indexOf(num);
    if (index > -1) {
        array.splice(index, 1);
    }
}

function checkwin(){
    var i;
    for(i=0;i<win.length;i++){
        const result1 = win[i].every(val => playerTern.includes(val));
        const result2 = win[i].every(val => botTern.includes(val));
        console.log("player walk : "+result1);
        console.log("computer walk : "+result2);
        if(result2==true){
            document.getElementById('score2').innerHTML="Computer Won";
            return true;
        }
        if(result1==true){
            document.getElementById('score1').innerHTML="Player Won";
            return true;
        }
    }
}

const img0 = document.getElementById('0');
img0.addEventListener('click', addX);
const img1 = document.getElementById('1');
img1.addEventListener('click', addX);
const img2 = document.getElementById('2');
img2.addEventListener('click', addX);
const img3 = document.getElementById('3');
img3.addEventListener('click', addX);
const img4 = document.getElementById('4');
img4.addEventListener('click', addX);
const img5 = document.getElementById('5');
img5.addEventListener('click', addX);
const img6 = document.getElementById('6');
img6.addEventListener('click', addX);
const img7 = document.getElementById('7');
img7.addEventListener('click', addX);
const img8 = document.getElementById('8');
img8.addEventListener('click', addX);

