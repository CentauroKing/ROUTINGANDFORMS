import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-normal',
  imports: [FormsModule,CommonModule],
  templateUrl: './form-normal.html',
  styleUrl: './form-normal.css'
})
export class FormNormal {
name:string = '';
names:string[] = [];
enviar() {
   if(this.name.trim()){
     this.names.push(this.name.trim());
     this.name = '';
     console.log('Nombre enviado:', this.name);
   }
  }
}