async function delay(ms = 500) {
  await new Promise(resolve => {
    setTimeout(() => {
      resolve('some value');
    }, ms);
  });
}

export default delay;
