let delay = 50;
chars = [
  '\r|   ', 
  '\r/   ', 
  '\r-   ', 
  '\r\   ', 
  '\r|   ', 
  '\r/   ', 
  '\r-   ', 
  '\r/   ', 
  '\r|   ', 
  '\n'
]

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    process.stdout.write(chars[i]);
  }, delay);
  delay += 200;
};