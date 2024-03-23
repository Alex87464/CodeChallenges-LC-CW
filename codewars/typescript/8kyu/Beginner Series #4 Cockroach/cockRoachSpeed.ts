// Beginner Series #4 Cockroach
// https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/typescript

export function cockroachSpeed(s: number): number {
  const cmPerSecond = Math.floor((s * 100000) / 3600);
  return cmPerSecond;
}
