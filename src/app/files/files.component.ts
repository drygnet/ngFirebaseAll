import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'; // realtime database


@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  rtRef: AngularFireList<any>;
  fileList: Observable<any>;
  // base path for both storage and realtime database
  basePath = `users/${this.afAuth.auth.currentUser.uid}/`;
  constructor(
    private storage: AngularFireStorage,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase) {
      this.rtRef = db.list(this.basePath);
      this.fileList = this.rtRef.snapshotChanges().pipe(
        map(changes =>
          // gets the key of the object in realtime database (so we can delete later)
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
  }

  ngOnInit() {
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = `users/${this.afAuth.auth.currentUser.uid}/${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(downloadURL => {
          console.log('File available at', downloadURL);
          file.downloadUrl = downloadURL;

          // Saves file metadata to the realtime database (so we can find it), angularFire has no method for listing Storage items.
          this.saveFileData(file);
        });
      })
    )
      .subscribe();
  }

  private saveFileData(file) {
    // The File-oject is "special", so we make a new object to write to the realtime Datamase
    const fileData = {
      downloadUrl: file.downloadUrl,
      lastModified: file.lastModified,
      name: file.name,
      size: file.size,
      type: file.type

    };
    this.db.list(this.basePath).push(fileData);
  }

  deleteFile(file) {
    // sloppy delete
    const fileRef = this.storage.ref(`users/${this.afAuth.auth.currentUser.uid}/${file.name}`);
    fileRef.delete().subscribe();

    // also remove from realtime database
    this.rtRef.remove(file.key);
  }


}
