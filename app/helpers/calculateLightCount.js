import { roomTypesLuxPerM2 } from "../constants/roomTypesLuxPerM2";

export const calculateLightCount = ({ roomX, roomY, roomType, lumensByLight }) => {
  const surface = roomX * roomY;
  const needLumens = surface * roomTypesLuxPerM2[roomType];
  let lightCount = Math.ceil(needLumens / lumensByLight);

  if (lightCount % 2 !== 0) {
    lightCount += 1;
  }

  return lightCount;
}
