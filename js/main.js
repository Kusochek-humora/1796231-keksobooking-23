const random = (min, max, float) => (Math.round((min + Math.random() * (max - min)) * Math.pow(10, float)) / Math.pow(10, float));
random(1, 10, 3);
