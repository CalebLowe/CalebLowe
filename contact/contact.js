var contactObject = {
  "name" : {
    "firstName": "Caleb",
    "lastName": "Lowe"
  },
  "email": "Caleb_lowe@live.com",
  "Facebook": "www.facebook.com/caleb.lowe.146",
  "Github":"https://github.com/CalebLowe"
}


var elementLister = function( contactElement ){
  var listString = "<li>" + contactElement + "</li>";

  if(Array.isArray( contactElement )){
    listString = "<ol>";

    contactElement.forEach( function( element ){
      listString += "<li>" + element + "</li>";
    });

    listString += "</ol>";
  } else if(typeof contactElement === "object"){
    listString = "<li>";

    for(var element in contactElement){
      listString += contactElement[element] + " ";
    }

    listString += "</li>";
  }

  $("#contact-list").append(listString);
};

for(var contactType in contactObject){
  elementLister( contactObject[contactType] );
}
