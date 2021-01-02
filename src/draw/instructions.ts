type ClearInstruction = {
  type: 'clear',
}

type LineInstruction = {
  type: 'line',
}

export type DrawInstruction =
  | ClearInstruction
  | LineInstruction

export function createLineInstruction(): LineInstruction {
  return {
    type: 'line',
  };
}
