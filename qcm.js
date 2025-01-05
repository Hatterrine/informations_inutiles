var numQues = 3;
var numChoi = 4;

var answers = new Array(3);
var answers_true = new Array(3);
var answers_false = new Array(3);

answers[0] = "r3";
answers_true[0] = "Bien joué, la légende dit que c'est Jean-Bernard !";
answers_false[0] = "Domage ! Je suis sûre que tu vas réussir.";

answers[1] = "r4";
answers_true[1] = "Bien joué, vous avez une bonne culture historique !";
answers_false[1] = "Oh mince; perdus. ";

answers[2] = "r2";
answers_true[2] = "Bien joué, vous avez une bonne culture scientifique !";
answers_false[2] = "Hélas, c'est pas la bonne réponse. Même si ce n'est pas totalement faux tout dépend du point de vue.";

function getScore(form) {
  var score = 0;
  var currElt;
  var currSelection;

  for (i=0; i<numQues; i++) {
    currElt = i*(numChoi+1);
    for (j=0; j<numChoi; j++) {
      currSelection = form.elements[currElt + j+1];
      if (currSelection.checked) {
        if (currSelection.value == answers[i]) {
          score++;
          form.elements[currElt].value=answers_true[i];
          break;
        }
        else {
          form.elements[currElt].value=answers_false[i];
        }
      }
    }
  }

  score = Math.round(score/numQues*100);
  form.percentage.value = score + "%";

  var correctAnswers = "";
  for (i=1; i<=numQues; i++) {
    correctAnswers += i + ". " + answers[i-1] + "\r\n";
  }
  form.solutions.value = correctAnswers;

}

function changeImage()
{
  var v = document.body.background;
  if(v.indexOf("legend_of_zelda_acc") != -1)
    v = "walle_acc.gif";
  else
    v = "legend_of_zelda_acc.jpg"; 

  var z = new Image();
  z.src = v;
  document.body.background = z.src;  
}
function setImage()
{
	var z = new Image();
	z.src = "legend_of_zelda_acc.jpg";
	document.body.background = z.src;
}
window.onload=setImage;