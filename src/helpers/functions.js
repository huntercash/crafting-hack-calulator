// XX = hrs
// YY = %HR
// YY * 60 = ZZ
// XX.ZZ total speed ups to use
// (TIME IN Min x % desired color)
// ______________________ XX,YY

//480 + 37
// 517
// 52.63%
// 272.0971
// 4 hours
// 5349

exports.calculate = (hours, minutes, percentage) => {
  return Math.floor((percentage / 100) * (hours * 60 + parseInt(minutes)));
};
