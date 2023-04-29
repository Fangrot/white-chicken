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
        name: 'Race 1',
        desc: 'Description for Race 1.',
        image: 'race1.png'
      };
    case 'race2':
      return {
        name: 'Race 2',
        desc: 'Description for Race 2.',
        image: 'race2.png'
      };
    case 'race3':
      return {
        name: 'Race 3',
        desc: 'Description for Race 3.',
        image: 'race3.png'
      };
    case 'race4':
      return {
        name: 'Race 4',
        desc: 'Description for Race 4.',
        image: 'race4.png'
      };     
    case 'race5':
      return {
        name: 'Race 5',
        desc: 'Description for Race 5.',
        image: 'race5.png'
      };
    case 'race6':
      return {
        name: 'Race 6',
        desc: 'Description for Race 6.',
        image: 'race6.png'
      };
    case 'race7':
      return {
        name: 'Race 7',
        desc: 'Description for Race 7.',
        image: 'race7.png'
      };
    case 'race8':
      return {
        name: 'Race 8',
        desc: 'Description for Race 8.',
        image: 'race8.png'
      };
    case 'race9':
      return {
        name: 'Race 9',
        desc: 'Description for Race 9.',
        image: 'race9.png'
      };
    case 'race10':
      return {
        name: 'Race 10',
        desc: 'Description for Race 10.',
        image: 'race10.png'
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
