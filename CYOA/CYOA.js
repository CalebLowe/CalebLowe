var response = prompt("You have awakened in a strange place. you realize you have a weapon in your hand.  |look around| Begin walking|");

if(response === "look around"){
    response = prompt("you seem to be in a dark forest. strange colors cover foliage and grasses. the forest is dense but you found an old path that may lead back to civilization. |begin walking| yell for help|");
} else if (response === "begin walking") {
    response = prompt("the forest is dense, but youve found an old path that may lead back to civilization. | continue walking| yell for help|");
} else {
    prompt("Please type in a valid input! Refresh the page to try again.");
}

if(response === "yell for help"){
    response = prompt("Your voice echoes loudly through much of the forest. you dont hear a response, but youve definately stirred some of the wild-life that resides in this dark place. |Continue|");
} else if (response || "continue walking","begin walking") {
    response = prompt("the path leads to split. |go left| go right| look aroud|");
} else {
    prompt("Please type in a valid input! Refresh the page to try again.");
}

if(response === "go left"){
    response = prompt("the path leads on for a long time, and is going deeper into the woods.it seems to be getting darker. |push forward| turn around|");
} else if (response === "go right") {
    response = prompt("more light slowly starts to break through the thick foliage as you continue down the path for a while. a shadowy blur suddenly darts across the path ahead. |investigate| ignore|");
} else if (response === "look around"){
  response = prompt("as you look around, you notice an old sign lying at the base of a large tree. the sign reveals that the path to the right does eventually lead to people, but the left path goes deeper into the forest.|go left| go right|")
}
  else {
    prompt("Please type in a valid input! Refresh the page to try again.");
}

if(response === "push forward"){
    response = alert("its very late and there is no more daylight.The hungry creatures are becoming bold, and after a few failed attempts on your life, they finally succeed and have dinner. the animals are most grateful. better luck next time!");
}  else if (response === "turn around") {
    response = prompt("more light slowly starts to break through the thick foliage as you continue down the path for a while. a shadowy blur suddenly darts across the path ahead. |investigate| ignore|");
}  else if (response === "investigate") {
    response = prompt("as you move closer to investigate, a shadowy monster jumps out of the brush and onto the path in front of you. It seems very hostile. remember that weapon you had? time to use it! | attack| defend|");
}  else if (response === "ignore") {
    response = prompt("as you stroll down the path, you are tackled by a shadowy monster. Its claws sink in but you make it to your feet. remember that weapon you had? time to use it! |attack| defend");
}  else if (response === "go left") {
    response = prompt("the path leads on for a long time, and is going deeper into the woods.it seems to be getting darker. |push forward| turn around|");
} else if (response === "go right") {
    response = prompt("more light slowly starts to break through the thick foliage as you contine down the path for a while. a shadowy blur suddenly darts across the path ahead. |investigate| ignore|");
}

else {
    prompt("Please type in a valid input! try again.");
}

if(response === "investigate"){
    response = prompt("as you move closer to investigate, a shadowy monster jumps out of the brush and onto the path in front of you. It seems very hostile. remember that weapon you had? time to use it! | attack| defend|");
} else if (response === "ignore") {
    response = prompt("as you stroll down the path, you are tackled by a shadowy monster. Its claws sink in but you make it to your feet. remember that weapon you had? time to use it! |attack| defend");
} else if (response === "push forward") {
    response =  alert("its very late and there is no more daylight.The hungry creatures are becoming bold, and after a few failed attempts on your life, they finally succeed and have dinner. the animals are most grateful. better luck next time!");
}  else if (response === "turn around") {
    response = prompt("more light slowly starts to break through the thick foliage as you continue down the path for a while. a shadowy blur suddenly darts across the path ahead. |investigate| ignore|");
}  else if (response === "attack") {
    response = prompt("you get the first swing in and strike the beast well. He lunges at you with its claws drawn for attack. |dodge|counter|");
}  else if (response === "defend") {
    response = prompt("the monster tries to swipe at you with its sharp claws, but you succesfully parry its attack with your weapon. | attack | run |");
}
else {
    prompt("Please type in a valid input! Refresh the page to try again.");
}

if(response === "attack"){
    response = prompt("you get the first swing in and strike the beast well. He lunges at you with its claws drawn for attack. |dodge|counter|");
} else if (response === "defend") {
    response = prompt("the monster tries to swipe at you with its sharp claws, but you succesfully parry its attack with your weapon. | attack | run |");
}  else if (response === "dodge") {
    response = prompt("you manage to sidestep the beast when it lunges at you, giving you an oppurtunity to attack again  | attack again | run |");
}  else if (response === "counter") {
    response = prompt("The counter is unsuccesful, and you are slashed by the beast. | attack again | run |");
}  else if (response === "run") {
    response = prompt("you begin to run down the path, but the beast is gaining quickly, and is soon in range to attack again  | attack | keep running |");
}  else if (response === "investigate") {
    response = prompt("as you move closer to investigate, a shadowy monster jumps out of the brush and onto the path in front of you. It seems very hostile. remember that weapon you had? time to use it! | attack| defend|");
}  else if (response === "ignore") {
    response = prompt("as you stroll down the path, you are tackled by a shadowy monster. Its claws sink in but you make it to your feet. remember that weapon you had? time to use it! |attack| defend");
}  else {
    prompt("Please type in a valid input! Refresh the page to try again.");
}

if(response === "dodge"){
    response = prompt("you manage to sidestep the beast when it lunges at you, giving you an oppurtunity to attack again  | attack again | run |");
} else if (response === "counter") {
    response = prompt("The counter is unsuccesful, and you are slashed by the beast. | attack again | run |");
} else if (response === "attack") {
    response = prompt(("you get the first swing in and strike the beast well. He lunges at you with its claws drawn for attack. |dodge|counter|");
} else if (response === "run") {
    response = prompt("you begin to run down the path, but the beast is gaining quickly, and is soon in range to attack again  | attack again | keep running |");
} else if (response === "keep running") {
    response = prompt("as you run, the monster lunges from behind and knocks you prone.it is not long before the beast devours you. he is most grateful for the meal. better luck next time!");
} else if (response === "defend") {
    response = prompt("the monster tries to swipe at you with its sharp claws, but you succesfully parry its attack with your weapon. | attack again| run |");
} else if (response === "attack again") {
    response = prompt("a succesful blow knocks the beast to the ground.it is very wounded. |deal the final blow | leave |");
}
 else {
    prompt("Please type in a valid input! Refresh the page to try again.");
}

if(response === "run"){
    response = prompt("you begin to run down the path, but the beast is gaining quickly, and is soon in range to attack again.  | attack again | keep running |");
} else if (response === "attack again") {
    response = prompt("a succesful blow knocks the beast to the ground.it is very wounded. |deal the final blow | leave |");
}else if (response === "dodge") {
    response = prompt("you manage to sidestep the beast when it lunges at you, giving you an oppurtunity to attack again  | attack again | run |");
}else if (response === "counter") {
    response = prompt("The counter is unsuccesful, and you are slashed by the beast. | attack again | run |");
}else if (response === "deal the final blow") {
    response = prompt("The beast is still. you have survived the attack, but are also wounded and need medical attention. better move quickly! | continue down the path | ");
}else if (response === "leave") {
    response = prompt("you couldnt bring yourself to slay the beast, but it is hurt enough that it doesnt pursue you when you walk away. | continue down down the path |");
}else {
    prompt("Please type in a valid input! Refresh the page to try again.");
}

if(response === "attack again"){
    response = prompt("a succesful blow knocks the beast to the ground.it is very wounded. |deal the final blow | leave |");
} else if (response === "keep running" ) {
    response = alert("as you run, the monster lunges from behind and knocks you prone.it is not long before the beast devours you. he is most grateful for the meal. better luck next time!");
} else if (response === "deal the final blow") {
    response = prompt("The beast is still. you have survived the attack, but are also wounded and need medical attention. better move quickly! | continue down the path | ");
}else if (response === "leave") {
    response = prompt("you couldnt bring yourself to slay the beast, but it is hurt enough that it doesnt pursue you when you walk away.you have survived the attack, but are also wounded and need medical attention. better move quickly! | continue down down the path |");
}else if (response === "run") {
    response = prompt("you begin to run down the path, but the beast is gaining quickly, and is soon in range to attack again  | attack again | keep running |");
}else if (response === "continue down the path" ) {
    response = prompt( "as the evening sets in, you see a faint aura of light a ways ahead of you. you recognize this as the glow of a town.you have finally reached civilization. as the path ends, you hear something behind you.  | enter town | turn around | ");
}else {
    prompt("Please type in a valid input! Refresh the page to try again.");
}

if(response === "deal the final blow"){
    response = prompt("The beast is still. you have survived the attack, but are also wounded and need medical attention. better move quickly! | continue down the path | ");
} else if (response === "leave") {
    response = prompt("you couldnt bring yourself to slay the beast, but it is hurt enough that it doesnt pursue you when you walk away.you have survived the attack, but are also wounded and need medical attention. better move quickly! | continue down down the path |");
}  else if (response === "continue down the path") {
    response = prompt("as the evening sets in, you see a faint aura of light a ways ahead of you. you recognize this as the glow of a town.you have finally reached civilization. as the path ends, you hear something behind you.  | enter town | turn around | ");
}  else if (response === "attack again") {
    response = prompt("a succesful blow knocks the beast to the ground.it is very wounded. |deal the final blow | leave |");
}  else if (response === "keep running") {
    response = alert("as you run, the monster lunges from behind and knocks you prone.it is not long before the beast devours you. he is most grateful for the meal. better luck next time!");
}  else if (response === "enter town") {
    response = alert("youve finally made it out of the dark forest! as you enter town and look for help, you hear the furious roar of a wounded shadow monster entering behind you. This isnt over.   TO BE CONTINUED (never)");
} else if (response === "turn around") {
    response = alert("you turn around to see a bloodied and furious shadow monster towering over you. it lets out a booming roar. This isnt over.    TO BE CONTINUED (never)");    
} else {
    prompt("Please type in a valid input! Refresh the page to try again.");
}

if(response === "deal the final blow"){
    response = prompt("The beast is still. you have survived the attack, but are also wounded and need medical attention. better move quickly! | continue down the path | ");
} else if (response === "continue down the path") {
    response = prompt("as the evening sets in, you see a faint aura of light a ways ahead of you. you recognize this as the glow of a town.you have finally reached civilization. as the path ends, you hear something behind you.  | enter town | turn around | ");
} else if (response === "enter town") {
    response = alert("youve finally made it out of the dark forest! as you enter town and look for help, you hear the furious roar of a wounded shadow monster entering behind you. This isnt over.   TO BE CONTINUED (never)");
} else if (response === "turn around") {
    response = alert("you turn around to see a bloodied and furious shadow monster towering over you. it lets out a booming roar. This isnt over.    TO BE CONTINUED (never)");
} else if (response === "leave") {
    response = prompt("you couldnt bring yourself to slay the beast, but it is hurt enough that it doesnt pursue you when you walk away.you have survived the attack, but are also wounded and need medical attention. better move quickly! | continue down down the path |");
}
