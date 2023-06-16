import { ValueType } from '@rc-component/mini-decimal';

export const countInputsToHeadcounts = (
  countInputs: (ValueType | null)[],
  seatLabels: string[],
): { row: string; headcount: ValueType }[] => {
  const seatingPlan: { row: string; headcount: ValueType }[] = [];

  for (let i = 0; i < countInputs.length; i++) {
    const headcount = countInputs[i];
    const count = headcount == null ? 0 : headcount;
    const row = seatLabels[i];

    seatingPlan.push({ row, headcount: count });
  }

  return seatingPlan;
};
