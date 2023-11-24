"use client"
import { Circle, Layer, Rect, Stage } from "react-konva";
import { roomTypesLuxPerM2 } from "./constants/roomTypesLuxPerM2"
import { useTranslation } from "./hooks/useTranslation";

// Fonction pour générer des positions en grille pour les spots sur le plafond
const generateGridSpotPositions = ({ lightCount, roomX, roomY }) => {
  const newSpots = [];
  const rows = Math.ceil(Math.sqrt((lightCount * roomY) / roomX));
  const cols = Math.ceil(lightCount / rows);

  const rowSpacing = roomY / rows;
  const colSpacing = roomX / cols;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * colSpacing + colSpacing / 2;
      const y = row * rowSpacing + rowSpacing / 2;
      newSpots.push({ x, y });
    }
  }
  return newSpots
};

const scaleMeters = (size, maxSize) => {
  const scales =  [100, 50, 20, 10, 5, 2, 1, 0.5]

  return scales.find((scale) => {
    if (size * scale <= maxSize) {
      return true
    }
  }) ?? 1
}

export default function Result({ roomX, roomY, lightCount, roomType }) {
  const scaleX = scaleMeters(roomX, window.innerWidth)
  const scaleY = scaleMeters(roomY, window.innerHeight)
  const [width, height] = [roomX * scaleX, roomY * scaleY]
  const spots = generateGridSpotPositions({ lightCount, roomX: width, roomY: height })
  const { t } = useTranslation()

  const radius = Math.min(scaleX, scaleY) >= 10 ? 10 : 3



  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="w-full flex flex-col">
        <h2 className="text-3xl mb-4">{t('result.title')}</h2>
        <p>{t("result.lumensInRoomType").replace('{value}', roomTypesLuxPerM2[roomType])}</p>
        <p>{t('result.numberOfLights').replace('{value}', lightCount)}</p>
      </div>
      <Stage className="bg-base-300 rounded" width={width} height={height}>
        <Layer>
          <Rect
            width={width}
            height={height}
          />

          {spots.map((spot, index) => (
            <Circle
              key={index}
              x={spot.x}
              y={spot.y}
              radius={radius}
              fill='#ede902'
              str
            />
          ))}
        </Layer>
      </Stage>

    </div>
  )
}
