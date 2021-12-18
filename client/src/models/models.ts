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
  star: string
  price: string
  total: string
  long: string
  lat: string
  
}


export interface ICoords {
  latitude: number, 
  longitude:number
}
