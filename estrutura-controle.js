/*escreval ("Digite o nome do aluno: ")
leia(nome)
escreval ("Digite a nota01 do aluno: ")
leia(nota01)
escreval ("Digite a nota02 do aluno: ")
leia(nota02)
media := (nota01 + nota02) / 2

se media >= 5 entao
  escreval ("Aprovado!", nome)
senao
  escreval ("Reprovado!", nome)
  fimse*/

  var nome, nota01, nota02;
  nome = prompt ("Digite o nome: ")
  nota01 = prompt ("Digite a nota01: ")
  nota02 = prompt ("Digite a nota02: ")

  media = (parseInt(nota01) + parseInt(nota02)) / 2;
 
  if(media >= 50){
       alert("Aprovado!" + nome)
  }
       else
       alert("Reprovado!" + nome)      