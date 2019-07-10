let array = [1,2,3,4,5]
let array2 = [];

$( "#start" ).html(array)

$( "#b1" ).click( () =>{
  array2 = array.map(value => value * 2);
  $( "#display" ).html(array2)
});

$( "#b2" ).click( () => {
  array2 = array.reduce((a, b) => a + b, 0)
  $( "#display" ).html(array2)
});

$( "#b3" ).click( () => {
  array2 = array.filter(value => value > 3);
  $( "#display" ).html(array2)
});

$( "#b4" ).click( () => {
  array2 = `Hello array ${array}`
  console.log(array2)
  $( "#display" ).html(array2)
});
