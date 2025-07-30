export const ArrayLoops = () => {
  //FOR LOOPS - used for iteration
  const numbers = [2, 4, 6, 8];
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }

  // first 0 goes in i is less than numbers.length so it goes to be added 1. from 0 to 3 the index of an array starts from 0 so it stops at 4 .


  //FOR EACH 
  const fruits = ['apple' , 'banana' , 'kiwi' , 'tangerine'];
  fruits.forEach(function(fruit) {
    console.log(fruit)
  })
  //FOR OF
  for (const fruit of fruits){
    console.log(fruit)
  }
  //while loop
  const items = ['item1' , 'item2'];
  let indexx = 0;
  while( indexx < items.length){
    console.log(items[indexx]);
    indexx++;
  }
  //FOR IN - iterate over objects
  const data = [ 10, 20, 30];
  for (const index in data){
    console.log(data[index])
  }

  return (
    <div>
      <p>array and loops</p>
    </div>
  );
};
