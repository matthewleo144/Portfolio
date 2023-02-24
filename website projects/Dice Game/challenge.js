var scores,roundscores,activePlayer,dice,gamePlaying,lastdice;
scores = [0,0];
roundscores = 0;
activePlayer = 0;

document.querySelector('#current-' + activePlayer).innerHTML ='<em>'+dice+'</em>';
document.getElementById('dice-1').style.display = 'none';
document.getElementById('dice-2').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-1').textContent = '0';

function nextPlayer(){
    activePlayer === 0? activePlayer = 1: activePlayer = 0;
    roundscores = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.one').classList.toggle('active');
    document.querySelector('.two').classList.toggle('active');
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
};

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
        var dice1 = Math.floor(Math.random()*6)+1;
        var dice2 = Math.floor(Math.random()*6)+1;
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-'+ dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-'+ dice2 + '.png';
        if( dice1 !== 6 && dice2 !==6){
            roundscores += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundscores;
        }else{
            nextPlayer();
        }
        //lastdice = dice;
        }
});
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
        scores[activePlayer] += roundscores;
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
    var input = document.querySelector('.final-score').value;
    var winnerValue;
        if(input){
            winnerValue = input;
        }else{
            winnerValue = 100;
        }
        if(scores[activePlayer] >= winnerValue){
            gamePlaying = false;
            document.querySelector('#name-'+activePlayer).textContent = 'Winner !';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner'); 
        }else{ 
            nextPlayer();
        }
    }
});

function init(){
    gamePlaying = true;
    scores = [0,0];
    roundscores = 0;
    activePlayer = 0;
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'PLAYER 1';
    document.getElementById('name-1').textContent = 'PLAYER 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');
}
document.querySelector('.btn-new').addEventListener('click',init);

