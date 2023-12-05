const somethingDangerous = () => {
  if (Math.random() > 0.5) {
    throw new Error("Oh dear!");
  }
};

try {
  somethingDangerous();
} catch (error) {
  console.log(error.message);
}
