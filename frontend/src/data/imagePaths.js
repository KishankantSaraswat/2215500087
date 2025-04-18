// src/data/imagePaths.js

export const userProfileImages = [
  '/api/placeholder/150/150',
  '/api/placeholder/150/150',
  '/api/placeholder/150/150',
  '/api/placeholder/150/150',
  '/api/placeholder/150/150',
  '/api/placeholder/150/150',
  '/api/placeholder/150/150',
  '/api/placeholder/150/150',
  '/api/placeholder/150/150',
  '/api/placeholder/150/150',
];

export const postImages = [
  '/api/placeholder/800/500',
  '/api/placeholder/800/500',
  '/api/placeholder/800/500',
  '/api/placeholder/800/500',
  '/api/placeholder/800/500',
  '/api/placeholder/800/500',
  '/api/placeholder/800/500',
  '/api/placeholder/800/500',
  '/api/placeholder/800/500',
  '/api/placeholder/800/500',
];

export const getRandomImage = (imageArray) => {
  const randomIndex = Math.floor(Math.random() * imageArray.length);
  return imageArray[randomIndex];
};

export const getImageForId = (id, imageArray) => {
  const index = id % imageArray.length;
  return imageArray[index];
};