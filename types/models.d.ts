import { GetGreenhouseQuery, GetUserQuery, GetDeviceQuery, GetAuthenticatedUserQuery } from "#gql/default"

declare type User = GetUserQuery
declare type AuthenticatedUser = GetAuthenticatedUserQuery
declare type Device = GetDeviceQuery
declare type Greenhouse = GetGreenhouseQuery

declare interface Coordinates {
  lng: number
  lat: number
}
