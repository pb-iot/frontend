declare interface User {
  id: number,
  name: string,
  surname: string
  type: string
  // NOTE: can be extended in the future
}

interface Location {
  lng: number
  lat: number
}

interface Device {
  id: number,
  name: string,
  brand: string,
  type: string
}
