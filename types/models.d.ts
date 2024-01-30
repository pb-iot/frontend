import { GetGreenhouseQuery, GetUserQuery, GetDeviceQuery } from "#gql/default"

declare type User = GetUserQuery
declare type Device = GetDeviceQuery
declare type Greenhouse = GetGreenhouseQuery

declare interface Coordinates {
  lng: number
  lat: number
}
