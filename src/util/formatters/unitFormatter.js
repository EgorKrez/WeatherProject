export const translateNumbers = (temp, unit) => {
  if (unit === "C") return Math.floor(temp - 273) + " °С";
  if (unit === "F") return Math.floor((temp - 273) * 1.8 + 32) + " °F";
};
