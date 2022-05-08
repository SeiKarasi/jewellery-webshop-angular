import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Image } from '../models/Image';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {AngularFireStorage} from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class JewelleryShopService {

  // HTTP
  collectionName = 'Jewelry';

  constructor(
    private http: HttpClient,
     private afs: AngularFirestore,
     private firestorage: AngularFireStorage) { }

  loadImageMeta(metaUrl: string): Observable<Array<Image>>{

    return this.afs.collection<Image>(this.collectionName).valueChanges();
  }

  loadImage(imageUrl: string){
    return this.firestorage.ref(imageUrl).getDownloadURL();
  }
}
