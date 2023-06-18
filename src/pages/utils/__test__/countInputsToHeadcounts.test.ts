import { countInputsToHeadcounts } from '../countInputsToHeadcounts';
import { ValueType } from '@rc-component/mini-decimal';

describe('countInputsToHeadcounts', () => {
  it('should return an array with row and headcount for each input', () => {
    const countInputs = [2, null, 1, 3];
    const seatLabels = ['A', 'B', 'C', 'D'];

    const result = countInputsToHeadcounts(countInputs, seatLabels);

    expect(result).toEqual([
      { row: 'A', headcount: 2 },
      { row: 'B', headcount: 0 },
      { row: 'C', headcount: 1 },
      { row: 'D', headcount: 3 },
    ]);
  });

  it('should handle null values in countInputs', () => {
    const countInputs = [null, 5, null];
    const seatLabels = ['A', 'B', 'C'];

    const result = countInputsToHeadcounts(countInputs, seatLabels);

    expect(result).toEqual([
      { row: 'A', headcount: 0 },
      { row: 'B', headcount: 5 },
      { row: 'C', headcount: 0 },
    ]);
  });

  it('should return an empty array when countInputs and seatLabels are empty', () => {
    const countInputs: (ValueType | null)[] = [];
    const seatLabels: string[] = [];

    const result = countInputsToHeadcounts(countInputs, seatLabels);

    expect(result).toEqual([]);
  });
});
