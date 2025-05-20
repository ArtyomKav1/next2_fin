import { DayData } from "./Nums/Nums";

export const constFilters = [
  "Онлайн",
  "Офлайн",
  "Базовый курс",
  "Caselook",
  "Casebook",
  "Банкротство",
  "С преподавателем",
];
export const day: string[] = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
export const months = [
  "янв",
  "февр",
  "март",
  "апр",
  "май",
  "июнь",
  "июль",
  "авг",
  "сент",
  "окт",
  "нояб",
  "дек",
];

export function generateMonthData(year: number, month: number): DayData[] {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  return Array.from({ length: daysInMonth }, (_, i) => [year, month, i + 1]);
}
