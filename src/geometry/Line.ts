import Vec from './Vec';

export default class Line {
  from: Vec;
  to: Vec;

  constructor(from: Vec, to: Vec) {
    this.from = from;
    this.to = to;
  }
}
