'use strict'; 
(function() {

 /* let person = {
    name: {
      first: 'Jim',
      last: 'Cooper'
    },
    age: 29
  }
  Object.defineProperty(person, 'fullName',
  {
    get: function() {
      return this.name.first + ' ' + this.name.last;
    },
    set: function(val){
      var nameParts = val.split('-');
      this.name.first = nameParts[0];
      this.name.last = nameParts[1];
    }
  })

  Object.defineProperty(person, 'age',
    {configurable: false})

    Object.defineProperty(person, 'age',
    {writable: false})

  person.age = 40;

  display(person.fullName);
  person.fullName = "Fred-Jones";
  display(person.fullName);

  person.level = 3;
  display(person);
 

  function search(logData) {
    let regex = /ERROR(.*?);/g;
    let resultat = regex.exec(logData);
    return resultat;
  }

  let logData = "INFO:OK;ERROR;INFO:OK:ERROR;";
  display(search(logData));

   */

  function reshape(num, str){
      var regex = new RegExp(".{" + num + "}", "g");
      return str.replace(regex, "$&-");
    }

    display(reshape(3, "hehejhejhejhejh"));
})();