function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

const images = importAll(
  require.context('../assets/dataImages', false, /\.(png|jpe?g|svg)$/)
);

export const dataArray = [
  {
    link: '/Colors',
    imageUrl: images['01.png'],
    title: 'Colors',
    description: 'Change a background color randomly',
    color: 'rgba(255, 166, 0, 0.7)',
  },
  {
    link: '/Hex-colors-gradient',
    imageUrl: images['02.png'],
    title: 'Hex colors gradient',
    description: 'See the gradient Numbers',
    color: 'rgba(255, 0, 0, 0.7)',
  },
  {
    link: '/Random-quote-generator',
    imageUrl: images['03.png'],
    title: 'Random quote generator',
    description: 'Try Random quote generator!',
    color: 'rgba(128, 0, 128, 0.7)',
  },
  {
    link: '/The-message',
    imageUrl: images['04.png'],
    title: 'The message',
    description: 'Write a simple message',
    color: 'rgba(30, 143, 255, 0.7)',
  },
  {
    link: '/Counter',
    imageUrl: images['05.png'],
    title: 'Counter',
    description: 'A simple Counter',
    color: 'rgba(50, 205, 50, 0.7)',
  },
  {
    link: '/Image-carousel',
    imageUrl: images['06.png'],
    title: 'Image carousel',
    description: 'Try Image carousel',
    color: 'rgba(212, 0, 125, 0.7)',
  },
  {
    link: '/Digital-clock',
    imageUrl: images['07.png'],
    title: 'Digital clock',
    description: `It's a digital clock!`,
    color: 'rgba(76, 0, 130, 0.7)',
  },
  {
    link: '/Calculator',
    imageUrl: images['08.png'],
    title: 'Calculator',
    description: 'Calculate simply',
    color: 'rgba(100, 20, 0, 0.7)',
  },
  {
    link: '/Grocery-list',
    imageUrl: images['09.png'],
    title: 'Grocery List',
    description:
      'Need groceries? let make a grocery list with this application',
    color: 'rgba(50, 230, 0, 0.7)',
  },
  {
    link: '/Tip-calculator',
    imageUrl: images['10.png'],
    title: 'Tip calculator',
    description: 'Calculate tip with your friends!',
    color: 'rgba(160, 100, 80, 0.7)',
  },
  {
    link: '/Flashcards',
    imageUrl:
      'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZXxlbnwwfHwwfHw%3D&w=1000&q=80',
    title: 'Flashcards',
    description: 'Flashcards',
    color: 'tomato',
  },
  {
    link: '/Todo-list',
    imageUrl:
      'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZXxlbnwwfHwwfHw%3D&w=1000&q=80',
    title: 'Todo list',
    description: 'Todo list',
    color: 'tomato',
  },
  {
    link: '/Sticky-notes',
    imageUrl:
      'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZXxlbnwwfHwwfHw%3D&w=1000&q=80',
    title: 'Sticky notes',
    description: 'Sticky notes',
    color: 'tomato',
  },
  {
    link: '/Timer',
    imageUrl: images['14.png'],
    title: 'Timer',
    description: 'Timer',
    color: 'rgba(10, 199, 80, 0.7)',
  },
  {
    link: '/Math',
    imageUrl: images['15.png'],
    title: 'Math',
    description: 'Math',
    color: 'rgba(70, 50, 160, 0.7)',
  },
  {
    link: '/Unsplash-API',
    imageUrl: images['16.png'],
    title: 'Unsplash API',
    description: 'Search every photos you want!',
    color: 'rgba(180, 10, 90, 0.7)',
  },
  {
    link: '/Typewriter',
    imageUrl:
      'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZXxlbnwwfHwwfHw%3D&w=1000&q=80',
    title: 'Typewriter',
    description: 'You can see random quote automatically',
    color: 'tomato',
  },
  {
    link: '/Square-cards',
    imageUrl: images['18.png'],
    title: 'Square cards',
    description: 'See the projects',
    color: 'rgba(200, 200, 200, 0.7)',
  },
  {
    link: '/Weather-application',
    imageUrl: images['19.png'],
    title: 'Weather application',
    description: 'Check your city weather',
    color: 'rgba(20, 30, 40, 0.7)',
  },
  {
    link: '/Wikipedia-API',
    imageUrl: images['20.png'],
    title: 'Wikipedia API',
    description: 'Search everything you want',
    color: 'rgba(150, 20, 10, 0.7)',
  },
  {
    link: '/Quiz-app',
    imageUrl: images['22.png'],
    title: 'Quiz app',
    description: 'Make and Task Quiz',
    color: 'rgba(80, 170, 80, 0.7)',
  },
];
