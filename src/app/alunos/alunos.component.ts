import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Aluno } from '../model/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  modalRef: BsModalRef;
  public alunoForm: FormGroup;
  titulo = 'Alunos';
  public alunoSelecionado: Aluno;
  public textSimple: string;

  public alunos = [
    {id:1, nome:'Marta', sobrenome:'Janete', telefone: 33333333 },
    {id:2, nome:'Paula', sobrenome:'Cristina', telefone: 33336666},
    {id:3, nome:'Laura', sobrenome:'Miller', telefone: 33332222},
    {id:4, nome:'Luiza', sobrenome:'Tomé', telefone: 33331111},
    {id:5, nome:'Lucas', sobrenome:'José', telefone: 33334444},
    {id:6, nome:'Pedro', sobrenome:'Henrique', telefone: 33335555},
    {id:7, nome:'Paulo', sobrenome:'Antônio', telefone: 33337777},
  ];



  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder, private modalService: BsModalService) {
    this.criarForm();
   }

  ngOnInit(): void {
  }

  criarForm(){
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  alunoSubmit(){
    console.log(this.alunoForm.value);
  }

  alunoSelect(aluno: Aluno){
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar(){
    this.alunoSelecionado = null;
  }


}
