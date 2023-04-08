// @ts-nocheck
import { Size } from '@interfaces/size';

export function parseAspectRatio(aspectRatio: string) {
  // Split the string by the colon and convert the parts to numbers
  const parts = aspectRatio.split(':').map(Number);

  // Return the quotient of the first part divided by the second part
  return parts[0] / parts[1];
}

export function resizeImage(imageSize: Size, aspectRatio: number) {
  // Find the greatest common divisor (GCD) of the width and height of the image
  function gcd(a, b) {
    return b == 0 ? a : gcd(b, a % b);
  }
  const divisor = gcd(imageSize.width, imageSize.height);

  // Divide both values by the GCD to get the simplified aspect ratio
  const simplifiedWidth = imageSize.width / divisor;
  const simplifiedHeight = imageSize.height / divisor;

  // Compare the simplified aspect ratio with the desired aspect ratio and adjust accordingly
  if (simplifiedWidth / simplifiedHeight > aspectRatio) {
    // The image is too wide, so reduce the width proportionally to the height
    return {
      width: Math.round(imageSize.height * aspectRatio),
      height: imageSize.height,
    };
  } else if (simplifiedWidth / simplifiedHeight < aspectRatio) {
    // The image is too tall, so reduce the height proportionally to the width
    return {
      width: imageSize.width,
      height: Math.round(imageSize.width / aspectRatio),
    };
  } else {
    // The image already has the desired aspect ratio, so return it unchanged
    return imageSize;
  }
}