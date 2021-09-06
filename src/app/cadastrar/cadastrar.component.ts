import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
})
export class CadastrarComponent implements OnInit {
  usuario: Usuario = new Usuario();
  confirmarSenha: string;
  tipousu: string;
  
  constructor(private authService: AuthService,private router: Router) {}

  ngOnInit() {
    window.scroll(0, 0);
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value;
  }

  tipoUsuario(event: any) {
    this.tipousu = event.target.value;
  }

  cadastrar() {
  this.usuario.tipo = this.tipousu

    if (this.usuario.senha != this.confirmarSenha) {
      alert('As senhas não coincidem!');
    } else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp;
        this.router.navigate(['/entrar']);
        alert('Usuario cadastrado com sucesso');
      });
    }
  }
}
