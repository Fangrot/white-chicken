const races = document.querySelectorAll('.race');
const raceName = document.querySelector('.race-name');
const raceDesc = document.querySelector('.race-desc');
const raceImg = document.querySelector('.race-info img');

races.forEach(race => {
  race.addEventListener('click', () => {
    // Get the race data from the data attribute
    const raceId = race.dataset.race;
    const raceData = getRaceData(raceId);
    
    // Update the race information
    raceName.textContent = raceData.name;
    raceDesc.textContent = raceData.desc;
    raceImg.src = raceData.image;
  });
});

// Helper function to get the race data
function getRaceData(raceId) {
  // Replace this with your actual race data
  switch (raceId) {
    case 'race1':
      return {
        name: 'Aasimar',
        desc: "Age: You are mature. \nSize: Medium. Speed: 30 feet. Languages: You can speak, read, and write Common and one extra language of your choice.",
        image: 'race1.png'
      };
    case 'race2':
      return {
        name: 'Angler',
        desc: 'Description for Angler.',
        image: 'race2.png'
      };
    case 'race3':
      return {
        name: 'Animated Armour',
        desc: 'Description for Animated Armour.',
        image: 'race3.png'
      };
    case 'race4':
      return {
        name: 'Blubbant',
        desc: 'Description for Blubbant.',
        image: 'race4.png'
      };
    case 'race5':
      return {
        name: 'Bullywug',
        desc: 'Description for Bullywug.',
        image: 'race5.png'
      };
    case 'race6':
      return {
        name: 'Cecaelia',
        desc: 'Description for Cecaelia.',
        image: 'race6.png'
      };
    case 'race7':
      return {
        name: 'Coralloid',
        desc: 'Description for Coralloid.',
        image: 'race7.png'
      };
    case 'race8':
      return {
        name: 'Crabone',
        desc: 'Description for Crabone.',
        image: 'race8.png'
      };
    case 'race9':
      return {
        name: 'Deathroller',
        desc: 'Description for Deathroller.',
        image: 'race9.png'
      };
    case 'race10':
      return {
        name: 'Echolora',
        desc: 'Description for Echolora.',
        image: 'race10.png'
      };
    case 'race11':
      return {
        name: 'Eeleki',
        desc: 'Description for Eeleki.',
        image: 'race11.png'
      };
    case 'race12':
      return {
        name: 'Genasi',
        desc: 'Description for Genasi.',
        image: 'race12.png'
      };
    case 'race13':
      return {
        name: 'Grung',
        desc: 'Description for Grung.',
        image: 'race13.png'
      };
    case 'race14':
      return {
        name: 'Hammerhead',
        desc: 'Description for Hammerhead.',
        image: 'race14.png'
      };
    case 'race15':
      return {
        name: 'Kuo-Toa',
        desc: 'Description for Kuo-Toa.',
        image: 'race15.png'
      };
    case 'race16':
      return {
        name: 'Lizardfolk',
        desc: 'Description for Lizardfolk.',
        image: 'race16.png'
      };
    case 'race17':
      return {
        name: 'Loxodon',
        desc: 'Description for Loxodon.',
        image: 'race17.png'
      };
    case 'race18':
      return {
        name: 'Mantrimp',
        desc: 'Description for Mantrimp.',
        image: 'race18.png'
      };
    case 'race19':
      return {
        name: 'Merfolk',
        desc: 'Description for Merfolk.',
        image: 'race19.png'
      };
    case 'race20':
      return {
        name: 'Merrow',
        desc: 'Description for Merrow.',
        image: 'race20.png'
      };
    case 'race21':
      return {
        name: 'Mind Flayer',
        desc: 'Description for Mind Flayer.',
        image: 'race21.png'
      };
    case 'race22':
      return {
        name: 'Plasmoid',
        desc: 'Description for Plasmoid.',
        image: 'race22.png'
      };
    case 'race23':
      return {
        name: 'Puffer',
        desc: 'Description for Puffer.',
        image: 'race23.png'
      };
    case 'race24':
      return {
        name: 'Sahuagin',
        desc: 'Description for Sahuagin.',
        image: 'race24.png'
      };
    case 'race25':
      return {
        name: 'Sea Elf',
        desc: 'Description for Sea Elf.',
        image: 'race25.png'
      };
    case 'race26':
      return {
        name: 'Sea Hag Hexblood',
        desc: 'Description for Sea Hag Hexblood.',
        image: 'race26.png'
      };
    case 'race27':
      return {
        name: 'Slider',
        desc: 'Description for Slider.',
        image: 'race27.png'
      };
    case 'race28':
      return {
        name: 'Squidfolk',
        desc: 'Description for Squidfolk.',
        image: 'race28.png'
      };
    case 'race29':
      return {
        name: 'Stormkin',
        desc: 'Description for Stormkin.',
        image: 'race29.png'
      };
    case 'race30':
      return {
        name: 'Tortle',
        desc: 'Description for Tortle.',
        image: 'race30.png'
      };
    case 'race31':
      return {
        name: 'Triton',
        desc: 'Description for Triton.',
        image: 'race31.png'
      };
    case 'race32':
      return {
        name: 'Turtle Dragonborn',
        desc: 'Description for Turtle Dragonborn.',
        image: 'race32.png'
      };
    case 'race33':
      return {
        name: 'Walrusborn',
        desc: 'Description for Walrusborn.',
        image: 'race33.png'
      };
    case 'race34':
      return {
        name: 'Warforged',
        desc: 'Description for Warforged.',
        image: 'race34.png'
      };
    case 'race35':
      return {
        name: 'Water Devil',
        desc: 'Description for Water Devil.',
        image: 'race35.png'
      };
    case 'race36':
      return {
        name: 'Yuan-Ti',
        desc: 'Description for Yuan-Ti.',
        image: 'race36.png'
      };
    // Add more cases for the other races
    default:
      return {
        name: 'Unknown Race',
        desc: 'No description available.',
        image: 'placeholder.png'
      };
    }
}
