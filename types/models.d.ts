declare interface User {
  id: number
  name: string
  surname: string
  type: string
  avatar?: string
  // NOTE: can be extended in the future
}

declare interface Location {
  lng: number
  lat: number
}

declare interface Device {
  id: number
  name: string
  brand: string
  type: string
}

declare interface TargetGreenhouseEnvironment {
  temperature: number
  airHumidity: number
  lightIntensity: number
  carbonDioxideLevel: number
  waterLevelInSubstrate: number
  salinityLevelInSubstrate: number
  substrateTemperature: number
  weightOfSubstrateAndPlant: number
  stemMicrovariation: number
}

declare interface Greenhouse {
  id: number
  name: string
  plantType: string
  location: Location
  users: User[]
  devices: Device[]
  targetGreenhouseEnvironment: TargetGreenhouseEnvironment
}
