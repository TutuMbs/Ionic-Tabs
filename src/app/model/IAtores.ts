export interface IAtores{
  nome: string;
  nascimento: string;
  localdenascimento: string;
  idade: number;
  Foto: string;
  generos: string[];
  pagina?: string; //** a ? indica que o campo nao é obrigatorio*/
  favorito: boolean;
}
