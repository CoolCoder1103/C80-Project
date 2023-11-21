var names_of_people = [];
    
function submit()
{
    var GuestName = document.getElementById("name1").value;
	
	firstLetterCap = GuestName.charAt(0).toUpperCase() + GuestName.slice(1);
	names_of_people.push(firstLetterCap);
	console.log(GuestName);    
    console.log(names_of_people);
    var length_of_name = names_of_people.length;
    console.log(length_of_name);
	document.getElementById("display_name").innerHTML=names_of_people.toString();
   }



function show()
{
	var i= names_of_people.join("<br>");
	console.log(names_of_people);
	document.getElementById("p1").innerHTML=i.toString();
	document.getElementById("sort_button").style.display="block";
	
}


function sorting()
	{
		names_of_people.sort();
		var i= names_of_people.join("<br>");
		console.log(names_of_people);		
		document.getElementById("sorted").innerHTML=i.toString();
		}



function searching()
{
	var s= document.getElementById("s1").value;
	var found=0;
	var j;
	for(j=0; j<names_of_people.length; j++)
		{
			if(s.toUpperCase()==names_of_people[j].toUpperCase()){
				found=found+1;
			}	
		}
	document.getElementById("p2").innerHTML="name found "+found+" time/s";
	console.log("found name "+found+" time/s");
}
