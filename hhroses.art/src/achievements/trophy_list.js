// master list of all trophies — add new ones here 
const TROPHY_LIST = {
  // general
  button_clicker: {
    name: 'Curious Clicker',
    icon: '🖱️',
    description: 'Clicked on the button',
    category: 'general',
    soundUrl: 'https://hhroses.art/audio/goblin/daviddumaisaudio-small-monster-attack-195712.mp3'
  },
  clicker_2: {
    name: 'Master Clicker',
    icon: 'https://hhroses.art/images/icons/winxp-doge-16x16.png',
    description: 'Found the secret button',
    category: 'general',
    soundUrl: null
  },
  // games
  pixiePortal: {
    name:  'Spirited Away', 
    icon:   'https://hhroses.art/programs/PIXIE-PATH/images/o_pixiepieportal.png', 
    description:   'You entered the pixie portal', 
    category: 'games',
    soundUrl:   'https://hhroses.neocities.org/audio/magic-wand-6214.mp3'
  },
  fashionista: {
    name: 'Fashionista', 
    icon: 'https://wsrv.nl/?url=https://hhroses.art/programs/1st_Dressup_Game/screencap.jpg&w=32&h=32&fit=cover️',
    description: 'Saved your outfit in the 1st Dress-Up Game!',
    category: 'games', 
    soundUrl: 'https://hhroses.art/audio/sound-effects/pose-28.mp3'
  },
  // backrooms
  backrooms_noclip: { 
    title:  'No-clipped into the Backrooms', 
    icon:   'https://hhroses.art/images/icons/thebackrooms-32.jpg', 
    description:  'Entered the threshold', 
    category:  'backrooms',
    soundUrl:  'https://hhroses.art/audio/backrooms/10-minutes-of-backrooms-light-buzzing.mp3?playFor=3'
  },
  manilla_room: {
    name: 'You discovered the manilla room.', 
    icon: 'https://wsrv.nl/?url=backrooms-wiki.wdfiles.com/local--files/manila-room/ManilaRoom.jpg&w=32&h=32&fit=cover', 
    description: 'Explored the backrooms', 
    category: 'backrooms',
    soundUrl: 'https://hhroses.art/audio/backrooms/HeavyWallPounding.mp3?playFor=3'
  },
  kenophobia: {  
    name: 'Kenophobia',
    icon: 'https://wsrv.nl/?url=https://static.wikia.nocookie.net/backrooms/images/9/9a/Level_0.02_p.png&w=32&h=32&fit=cover', 
    description: 'Found the endless backroom', 
    category: 'backrooms',
    soundUrl: 'https://hhroses.art/audio/backrooms/10-minutes-of-backrooms-light-buzzing.mp3?playFor=3'
  },
  remodeld_mess: { 
    name:  'UGH! IT IS SO UGLY', 
    icon:  'https://wsrv.nl/?url=https://static.wikia.nocookie.net/backrooms-freewriting/images/7/74/RemodelledHQ.jpg/revision/latest?cb=20240104175815&w=32&h=32&fit=cover', 
    description:  'Found the ugly, remodeled backrooms', 
    category:  'backrooms',
    soundUrl:  'https://hhroses.art/audio/backrooms/10-minutes-of-backrooms-light-buzzing.mp3?playFor=3'
  },
  redrooms: {
    name: 'You found the Redrooms!', 
    icon:  'https://wsrv.nl/?url=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdg-qCCRUOVPKl22wt0QEchVtWx_r-V3PS1WPvaeq_JaQBKyHRZAWjCF0&s=10&w=32&h=32&fit=cover', 
    description:  'These Backrooms are RED', 
    category:  'backrooms',
    soundUrl:  'https://hhroses.art/audio/backrooms/10-minutes-of-backrooms-light-buzzing.mp3?playFor=3'
  },
  darkrooms: {
    title: 'You discovered the darkrooms', 
    icon:  'https://wsrv.nl/?url=https://static.wikia.nocookie.net/backrooms-freewriting/images/2/2d/Darko.jpg&w=32&h=32&fit=cover', 
    description:  'Explored the backrooms', 
    category:  'backrooms',
    soundUrl:  'https://hhroses.art/audio/backrooms/10-minutes-of-backrooms-light-buzzing.mp3?playFor=3'
  }
          
          
  
  
};