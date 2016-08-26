var firstNum = 0,
    $screen = $('#screen'),
    operator = '',
    editingFirst = true,
    secondNum = 0,
    audio = new Audio('sounds/nyan.mp3');

function addNum(event){
  $target = $(event.target);
  if(editingFirst){
    if(!$target.hasClass('operator') && !$target.hasClass('buttons')){
      firstNum = firstNum * 10 + parseInt($target.text());
    }
    $screen.text(firstNum);
  } else {
    if(!$target.hasClass('operator') && !$target.hasClass('buttons')){
      secondNum = secondNum * 10 + parseInt($target.text());
    }
    $screen.text(secondNum);
  }
}

function setOperator(event){
  var $target = $(event.target);
  if(event.target.id !== 'clear' && event.target.id !== 'equals'){
    operator = $target.text();
    editingFirst = false;
  }
}

function evaluate(event){
  $('body').css('background-image', 'url(http://cdn.nyanit.com/nyan2.gif)');
  $('body').css('background-color', 'black');
  audio.play();
  var parsed = operator.charCodeAt(0);
  if(parsed === 247){
    $screen.text(firstNum / secondNum);
    firstNum = firstNum / secondNum;
    //clear();
  } else if (parsed === 120){
    $screen.text(firstNum * secondNum);
    firstNum = firstNum * secondNum;
    //clear();
  } else if (parsed === 45){
    $screen.text(firstNum - secondNum);
    firstNum = firstNum - secondNum;
    //clear();
  } else if (parsed === 43){
    $screen.text(firstNum + secondNum);
    firstNum = firstNum + secondNum;
    //clear();
  }
}

function clear(){
  firstNum = 0;
  secondNum = 0;
  operator = '';
  editingFirst = true;
}

$('#clear').click(clear);
$('.buttons').click(addNum);
$('.operator').click(setOperator);
$('#equals').click(evaluate);
