export interface IUser {
  picture: { type: String, required: true },
  email: String
  email_verified: Boolean, 
  name: { type: String, required: true },
  nickname: { type: String, required: true },
  
  sub: { type: String, required: true },
  updated_at: String
  
  bio?: string
  job?: string
  locaion?: string  
  _id?: string
} 