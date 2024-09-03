function maximumNetworks(speed, minComps, speedThreshold) {
    const n = speed.length;
    let count = 0;
    let i = 0;
    while (i < n) {
      let j = i;
      let currentSpeed = 0;
      let currentCount = 0;
  
      while (j < n && currentCount < minComps) {
        currentSpeed += speed[j];
        currentCount++;
        j++;
      }
  
      while (j < n && currentSpeed < speedThreshold) {
        currentSpeed += speed[j];
        currentCount++;
        j++;
      }
  
      if (currentCount >= minComps && currentSpeed >= speedThreshold) {
        count++;
        i = j;
      } else {
        i++;
      }
    }
    return count;
  }
  