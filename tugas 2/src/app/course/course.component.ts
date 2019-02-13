import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  IniTugas = 'Ini Tugas Pertama Biodata';
  getIniTugas(){
    return this.IniTugas;
  }
    nama = 'Nama : Aflah Brillianto';
    alamat = 'Alamat : Madiun';
    getNamaAlamat(){
      return this.nama;
      return this.alamat;
    }
    currentDate = Date.now();
    Course;
    hobi;
    
  constructor(private c:CourseService) { 
     this.Course = c.getCourse();
    this.hobi = c.getHobby();
  }
   

  ngOnInit() {
  }

}
