import { Component, OnInit } from '@angular/core';
import studentsData from '../cards.json';  
import { NgFor } from '@angular/common';
import { Url } from 'url';
    
interface Student {  
    id: Number;  
    title: String;  
    text: String;

   
}  




@Component({
  selector: 'app-picture',
  standalone: true,
  templateUrl: './picture.component.html',
  styleUrl: './picture.component.css',
  imports: [NgFor],


})



export class PictureComponent {
  students: Student[] = studentsData; 
  
  }

 




