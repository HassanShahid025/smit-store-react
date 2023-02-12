import {collection, getFirestore} from 'firebase/firestore'
import { app } from './firebase-config'

export const firestore = getFirestore(app)

//Products Collection
export const productsCollection = collection(firestore,'products')