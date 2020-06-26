export const CAR_THEFT = 0;
export const FIRE = 1;
export const ACCIDENT = 2;
export const ANIMAL = 3;
export const VIOLENCE = 4;
export const BAD_SERVICES = 5;
export const DEATH = 6;
export const DTP = 7;
export const LOST_MAN = 8;
export const PROTEST = 9;
export const THEFT = 10;

export const incidents = [
  { type: PROTEST,      name: 'Акция протеста' },
  { type: DTP,          name: 'ДТП' },
  { type: ANIMAL,       name: 'Животные' },
  { type: THEFT,        name: 'Кража' },
  { type: VIOLENCE,     name: 'Насилие' },
  { type: ACCIDENT,     name: 'Несчастный случай' },
  { type: CAR_THEFT,    name: 'Угон' },
  { type: FIRE,         name: 'Пожар' },
  { type: BAD_SERVICES, name: 'Плохие услуги' },
  { type: LOST_MAN,     name: 'Пропал человек' },
  { type: DEATH,        name: 'Смерть' },
];
