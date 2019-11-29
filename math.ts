export const ANGLE = Math.PI * 2;

export const ANGLE1 = ANGLE / 360;

export const pxPerMeter = 8;

export const angle = (num: number) => ANGLE1 * num;

export const fps = (nowTime, lastTime) => 1000 / (nowTime - lastTime);

export const sin = function(num: number) {
  let _num = num % 360;
  if (num <= 90) return Math.sin(angle(num));

  if (num <= 180) return Math.cos(angle(num - 90));

  if (num <= 270) return Math.sin(angle(num - 180)) * -1;

  return Math.cos(angle(num - 270)) * -1;
};

export const cos = function(num: number) {
  let _num = num % 360;
  if (num <= 90) return Math.cos(angle(num)) * -1;

  if (num <= 180) return Math.sin(angle(num - 90));

  if (num <= 270) return Math.cos(angle(num - 180));

  return Math.sin(angle(num - 270)) * -1;
};
