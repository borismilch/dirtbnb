
import { makeAutoObservable } from "mobx";
import { ExtendedUser } from '../models/models' 

import { storage } from '../firebase'
import { uploadString, getDownloadURL, ref } from 'firebase/storage'

class UserStore {

  user = null as null | ExtendedUser
  isUser = false as boolean
  loading = false as boolean

  constructor () {
    makeAutoObservable(this)
  }

  setUser (user: ExtendedUser) {
    this.user = user
    this.isUser = true
    console.log('User Settede')
  }

  async addFileToStore (img: string) {
    const userRef = ref(storage, 'users/' + this.user?._id )

    await uploadString(userRef, img, 'data_url')

    const url = await getDownloadURL(userRef)

    return url
  }

  async addImageToStore (img: string, id:string ) {
    const userRef = ref(storage, 'images/' + id )

    await uploadString(userRef, img, 'data_url')

    const url = await getDownloadURL(userRef)

    return url
  }

}

export default UserStore