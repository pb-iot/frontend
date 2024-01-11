export const useGreenhouses = createGlobalState(async () => {
  // TODO: use with backend
  // const { data: greenhouses } = await useFetch('/api/greenhouses')

  const greenhouses = ref<Greenhouse[]>([{
    id: 1,
    name: 'Super Pomidory',
    plantType: 'Pomidory',
    location: {
      lng: 300,
      lat: 213
    },
    users: [{
      id: 1,
      name: 'Jan',
      surname: 'Kowalski',
      type: 'Właściciel',
      avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FzidKpI6Ism4%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=31917f1bf9c1555aeb6cac71246cc6ccca965c82f0ae112d9952b83bc67a07d5&ipo=images'
    }, {
      id: 22,
      name: 'Mikołaj',
      surname: 'Święty',
      type: 'Pracownik',
      avatar: 'https://images.unsplash.com/photo-1511600173735-a896042389cf?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }, {
      id: 3,
      name: 'Mariusz',
      surname: 'Pudzianowski',
      type: 'Obserwator',
      avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMGZhNzg5OWYtODU4NS00MzI0LTgwMjctNWZhMjk4MTU3MGM5XkEyXkFqcGdeQXVyMTc4MzI2NQ%40%40._V1_FMjpg_UX1000_.jpg&f=1&nofb=1&ipt=412cd966eb68eaa599a9e06569ecdf957f784b4f1038064495ea565fcf439480&ipo=images'
    }],
    devices: [
      {
        id: 1,
        name: 'Gardena 999',
        brand: 'Natrysk',
        type: 'Funkcyjne'
      }, {
        id: 2,
        name: 'AAA 999',
        brand: 'Termometr',
        type: 'Funkcyjne'
      }, {
        id: 3,
        name: 'Siii',
        brand: 'Pochłaniacz dwutlenku węgla',
        type: 'Funkcyjne'
      }
    ],
    targetGreenhouseEnvironment: {
      temperature: 20,
      airHumidity: 30,
      lightIntensity: 50,
      carbonDioxideLevel: 200,
      waterLevelInSubstrate: 60,
      salinityLevelInSubstrate: 65,
      substrateTemperature: 15,
      weightOfSubstrateAndPlant: 10,
      stemMicrovariation: 5
    }
  }, {
    id: 2,
    name: 'Super Zieleń',
    plantType: 'Ogórki',
    location: {
      lng: 150,
      lat: 312
    },
    users: [{
      id: 1,
      name: 'Jan',
      surname: 'Kowalski',
      type: 'Właściciel',
      avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FzidKpI6Ism4%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=31917f1bf9c1555aeb6cac71246cc6ccca965c82f0ae112d9952b83bc67a07d5&ipo=images'
    }, {
      id: 3,
      name: 'Mariusz',
      surname: 'Pudzianowski',
      type: 'Obserwator',
      avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMGZhNzg5OWYtODU4NS00MzI0LTgwMjctNWZhMjk4MTU3MGM5XkEyXkFqcGdeQXVyMTc4MzI2NQ%40%40._V1_FMjpg_UX1000_.jpg&f=1&nofb=1&ipt=412cd966eb68eaa599a9e06569ecdf957f784b4f1038064495ea565fcf439480&ipo=images'
    }],
    devices: [
      {
        id: 2,
        name: 'AAA 999',
        brand: 'Termometr',
        type: 'Funkcyjne'
      }, {
        id: 3,
        name: 'Siii',
        brand: 'Pochłaniacz dwutlenku węgla',
        type: 'Funkcyjne'
      }
    ],
    targetGreenhouseEnvironment: {
      temperature: 30,
      airHumidity: 23,
      lightIntensity: 53,
      carbonDioxideLevel: 400,
      waterLevelInSubstrate: 75,
      salinityLevelInSubstrate: 68,
      substrateTemperature: 20,
      weightOfSubstrateAndPlant: 12,
      stemMicrovariation: 7
    }
  }
])

  return { greenhouses }
})
