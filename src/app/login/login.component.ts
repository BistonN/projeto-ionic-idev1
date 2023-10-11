import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      'email': ['', Validators.required],
      'senha': ['', Validators.required]
    });
  }

  validarForm() {
    if (this.formulario.valid) {
      const dados = this.formulario.value;
      console.log('Dados do formulário:', dados);
    }
  }

}
