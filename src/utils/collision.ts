export function calculateScaleFactor(imageWidth: number, imageHeight: number, cropWidth: number, cropHeight: number) {
  const widthScaleFactor = cropWidth / imageWidth;
  const heightScaleFactor = cropHeight / imageHeight;

  return Math.min(1, Math.min(widthScaleFactor, heightScaleFactor));
}
