const makeShadow = (element, xDiff, yDiff, farthestPoint, settings) => {
  const { angle, diffusion, color, fixedShadow } = settings;

  let shadowArr = [];

  // If fixed shadow, add
  fixedShadow && shadowArr.push(fixedShadow);

  // Set offset values
  let xOffset = settings.xOffset ? settings.xOffset : 0;
  let yOffset = settings.yOffset ? settings.yOffset : 0;

  for (let i = angle; i < (farthestPoint + angle); i++) {
    shadowArr.push(`${(-xDiff/i)+xOffset}px ${(-yDiff/i)+yOffset}px ${diffusion}px ${color}`);
  }

  element.style.textShadow = shadowArr.join();
}

export default makeShadow;
