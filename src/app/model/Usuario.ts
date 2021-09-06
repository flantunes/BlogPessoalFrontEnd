import { Postagem } from './Postagem';

export class Usuario {
  public id: number;
  public nome: string;
  public dataNascimento: Date;
  public postagem: Postagem[];
  public senha: string;
  public usuario: string;
  public foto: string;
  public tipo: string;
}
