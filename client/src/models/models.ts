import { User } from "@auth0/auth0-react";
import { Dispatch, SetStateAction } from "react";

export interface IRoom {
  img: string
  _id: string
  location: string
  distance: string
}

export interface IHome {
  img: string
  title: string
  _id: string
}

export interface IPlace {
  img: string,
  location: string, 
  title: string
  description: string
  star: number
  price: number
  total: number
  long: number
  lat: number
  facilities: IFacilities,
  plesures?: string[],
  otherImages: string[],
  createdAt: number,
  coments?: IComment[],
  username: string,
  userid: string
  userimg: string
 
  
}

export interface IHost extends IPlace {
  _id?: string
}

export interface IComment {
  userId: string,
  username: string,
  rait: number,
  userImg: string
  message: string
}


export interface ICoords {
  latitude: number, 
  longitude:number
}

export interface ExtendedUser extends User {
  bio?: string
  location?: string
  job?: string
  _id?:string
}

export interface IFacilities {
  [key: string]: number
}

export interface IPeasures{
  [key: string]: string
}

export interface IAddHostContext{coords: ICoords, stage: number, setStage: (stage: number | ((prev: number) => number)) => void, setCoords: (coords: ICoords) => void, setFacilities: (fac: IFacilities) => void, facilities: IFacilities, changePlesure: (key: string) => void, plesures: IPeasures,
  titleImage: string, setTitleImage: (image: string) => void, otherImages: string[], addImage: (idx: number, img: string) => void, hostName: string, setHostName: (val: string) => void, hostSub: string, setHostSub: Dispatch<SetStateAction<string>>, costPerNight: number, createNewHost: () => Promise<void>,
  setCostPerNight: Dispatch<SetStateAction<number>>
}

export interface IPresureItem {icon: () => JSX.Element, title: string, ref: string}