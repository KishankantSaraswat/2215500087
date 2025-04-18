// src/data/imagePaths.js


export const userProfileImages = [
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/3.jpg',
    'https://randomuser.me/api/portraits/women/4.jpg',
    'https://randomuser.me/api/portraits/men/5.jpg',
    'https://randomuser.me/api/portraits/women/6.jpg',
    'https://randomuser.me/api/portraits/men/7.jpg',
    'https://randomuser.me/api/portraits/women/8.jpg',
    'https://randomuser.me/api/portraits/men/9.jpg',
    'https://randomuser.me/api/portraits/women/10.jpg',
  ];
  
 
  export const postImages = [
    'https://picsum.photos/seed/post1/800/500',
    'https://picsum.photos/seed/post2/800/500',
    'https://picsum.photos/seed/post3/800/500',
    'https://picsum.photos/seed/post4/800/500',
    'https://picsum.photos/seed/post5/800/500',
    'https://picsum.photos/seed/post6/800/500',
    'https://picsum.photos/seed/post7/800/500',
    'https://picsum.photos/seed/post8/800/500',
    'https://picsum.photos/seed/post9/800/500',
    'https://picsum.photos/seed/post10/800/500',
  ];
  
  
  export const getRandomImage = (imageArray) => {
    const randomIndex = Math.floor(Math.random() * imageArray.length);
    return imageArray[randomIndex];
  };
  

  export const getImageForId = (id, imageArray) => {
    const index = id % imageArray.length;
    return imageArray[index];
  };