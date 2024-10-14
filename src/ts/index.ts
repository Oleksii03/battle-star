function greet<T>(name: T) {
  return `Hello, ${name}!`;
}

console.log(greet<string>('World'));
