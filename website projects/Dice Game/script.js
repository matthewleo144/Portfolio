var scores,roundscores,activePlayer,dice,gamePlaying;
scores = [0,0];
roundscores = 0;
activePlayer = 0;

document.querySelector('#current-' + activePlayer).innerHTML ='<em>'+dice+'</em>';
document.querySelector('.dice').style.display = 'none';
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
    document.querySelector('.dice').style.display = 'none';
};

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
        var dice = Math.floor(Math.random()*6)+1;
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        if( dice > 1){
            roundscores += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundscores;
        }else{
            nextPlayer();
        }
        }
});
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
        scores[activePlayer] += roundscores;
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
        if(scores[activePlayer] >= 10){
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
    document.querySelector('.dice').style.display = 'none';
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

