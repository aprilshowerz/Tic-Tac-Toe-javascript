function startGame() 
{
	document.turn = "X";
	setMessage(document.turn + " get's to start.")
}

function setMessage(msg)
{
	document.getElementById("message").innerText = msg;

}

function nextMove(square) 
{
	if(square.innerText == '')
	{
		square.innerText = document.turn;
		switchTurn();
	}
		else
		{
			setMessage("Pick another square.")
		}
}

function switchTurn() 
{
	if(document.turn == "X") 
	{
		document.turn = "O";
	}
		else 
		{
			document.turn = "X"; 
		}
	setMessage("It's " + document.turn + "'s turn.'")
}

function checkRow(a, b, c, move)
{

}

function getBox(number)
{
	
}