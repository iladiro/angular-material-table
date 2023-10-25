import { ObjectKey } from '../types/col.types';

export interface IladiroAMTFilter<T> {
  value: string;
  col: ObjectKey<T>;
}

export interface IladiroAMTFilterStatus {
  clean: boolean;
  open: boolean;
  col: string;
}

export class IladiroAMTFilterStatusClass implements IladiroAMTFilterStatus {
  clean: boolean;
  open: boolean;
  col: string;

  constructor(clean: boolean, open: boolean, col: string) {
    this.clean = clean;
    this.col = col;
    this.open = open;
  }
}
