import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {

  formulario: FormGroup;
  formularioValido = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private storage: Storage
  ) {
    this.formulario = this.formBuilder.group({
      'email': ['', Validators.required],
      'senha': ['', Validators.required]
    });
  }

  async validarForm() {
    this.formularioValido = this.formulario.valid;
    if (this.formulario.valid) {
      const dados = this.formulario.value;
      console.log('Dados do formulário:', dados);
      await this.storage.set('usuario', dados.email);
      await this.storage.set('senha', dados.senha);
      
      this.router.navigate(['/home']);
    }
  }

}
