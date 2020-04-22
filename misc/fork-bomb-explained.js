function bomb() {
  console.log(new Date().toISOString());
  setInterval(bomb, 0);
}
bomb();

// (_ = () => setInterval(_, 0))();
