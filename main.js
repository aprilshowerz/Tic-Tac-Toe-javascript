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
	var result = false;
	if (getBox(a) == move && getBox(b) == move && getBox(c) == move)
		result = true;
}

//gets the values from the boxes.
function getBox(number)
{
	return document.getElementById("s" + number).innerText;
}