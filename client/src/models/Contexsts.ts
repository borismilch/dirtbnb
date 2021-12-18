import { ChangeEvent } from "react";

export interface SearchContext {
  startDate: Date
  endDate: Date
  guests: number

 
  changeDate: (ranges: any) => void
  changeGuests: (e: ChangeEvent<HTMLInputElement>) => void
}

export interface IRouterState {
  guestCount: number,
  startDate: string,
  endDate: string,
  location: string
}