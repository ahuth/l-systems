interface Rules {
  [predecessor: string]: string;
}

/**
 * Generator that yields successive iterations of an L-system.
 *
 * The `axiom` is the first iteration, and the `rules` translate the symbols of each iteration into
 * the next. Any characters not appearing in the rules will be carried over as-is to the next
 * iteration.
 *
 * @see https://en.wikipedia.org/wiki/L-system
 */
export function* generate(axiom: string, rules: Rules): Generator<string> {
  let current = axiom;

  while (true) {
    const next = current
      .split('')
      .map((char) => rules[char] || char)
      .join('');

    yield next;

    current = next;
  }
}
