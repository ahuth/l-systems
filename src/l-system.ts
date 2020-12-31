interface Rules {
  [predecessor: string]: string;
}

export function* generate(axiom: string, rules: Rules): Generator<string> {
  let current = axiom;

  while (true) {
    const next = current.split('').map(function (char) {
      return rules[char] || char;
    }).join('');

    yield next;

    current = next;
  }
}
