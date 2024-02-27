// const age=prompt("How old are you?");
function isOldEnough(age)
{
	if(age>=18)
	{return true;}
	return false;
}
const message = isOldEnough(age)?"Welcome!":"Bye!";
alert(message);
