let printName = function (hometown, state) {
  console.log(
    this.firstname + ' ' + this.lastname + ' from ' + hometown + ', ' + state
  );
};

let user1 = {
  firstname: 'Ravikant',
  lastname: 'Chaudhary',
};

printName.call(user1, 'Gorakhpur', 'Uttar Pradesh');

let user2 = {
  firstname: 'APJ',
  lastname: 'Kalam',
};

// function borrowing
printName.call(user2, 'Chennai', 'Tamilnadu');
printName.apply(user2, ['Chennai', 'Tamilnadu']);

// function binding
let printMyName = printName.bind(user2, 'Chennai', 'TamilNadu');
printMyName();
