async function actionOne() {
  await setTimeout(() => {
    console.log('First');
  }, 3000);
}

function actionTwo() {
  console.log('Second');
}

function actionThree() {
  console.log('Third');
}

actionOne();
actionTwo();
actionThree();

// Output:
// Second
// Third
// First