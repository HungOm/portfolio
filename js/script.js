


const slideInterval = 4000;

function getNum() {

  return document.getElementById('carousel').getElementsByTagName('figure');
}


function moveForward(){

  const pointer = 0;
  const figures = getNum();

  for (var i =0; i<figures.length; i++) {
    if (figures[i].className == 'active'){ 
      figures[i].className = 'inactive';
    pointer = i;
  }
}

if (++pointer==figures.length){

  pointer = 0;
}


figures[pointer].className ='inactive';

setTimeout(moveForward, slideInterval);

}



function startPlayback() {
  setTimeout(moveForward,slideInterval)
}

startPlayback();