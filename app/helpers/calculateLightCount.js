import { roomTypesLumenPerM2 } from "../constants/roomTypesLumenPerM2";

export const calculateLightCount = ({ roomX, roomY, roomZ, roomType, lumensByLight }) => {
  const surface = roomX * roomY * roomZ;
  const needLumens = surface * roomTypesLumenPerM2[roomType];
  let lightCount = Math.ceil(needLumens / lumensByLight);

  if (lightCount % 2 !== 0) {
    lightCount += 1;
  }

  return lightCount;
}
