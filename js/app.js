var firstNum = 0,
    $screen = $('#screen'),
    operator = '',
    editingFirst = true,
    secondNum = 0;
    audio = new Audio('https://soundcloud.com/techno-sound/nyan-cat-song');

function addNum(event){
  $target = $(event.target);
  if(!$target.hasClass('operator') && !$target.hasClass('buttons')){
    if(editingFirst){
      firstNum = firstNum * 10 + parseInt($target.text());
      $screen.text(firstNum);
    } else {
      secondNum = secondNum * 10 + parseInt($target.text());
      $screen.text(secondNum);
    }
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
  if(!editingFirst){
    console.log('yo');
    if(parsed === 247){
      if(secondNum){
        $screen.text(firstNum / secondNum);
        firstNum = firstNum / secondNum;
        operator = '';
        secondNum = 0;
        editingFirst = true;
      } else {
        $screen.text('NyaN');
      }
    } else if (parsed === 120){
      $screen.text(firstNum * secondNum);
      firstNum = firstNum * secondNum;
      operator = '';
      secondNum = 0;
      editingFirst = true;
    } else if (parsed === 45){
      $screen.text(firstNum - secondNum);
      firstNum = firstNum - secondNum;
      operator = '';
      secondNum = 0;
      editingFirst = true;
    } else if (parsed === 43){
      $screen.text(firstNum + secondNum);
      firstNum = firstNum + secondNum;
      operator = '';
      secondNum = 0;
      editingFirst = true;
    }
  }
}

function clear(){
  firstNum = 0;
  secondNum = 0;
  operator = '';
  editingFirst = true;
  $screen.text(firstNum);
}

$('#clear').click(clear);
$('.buttons').click(addNum);
$('.operator').click(setOperator);
$('#equals').click(evaluate);
