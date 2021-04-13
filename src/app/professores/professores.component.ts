import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Professor } from '../model/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  modalRef: BsModalRef;
  titulo = 'Professores';
  public professorSelecionado: Professor;
  public professorForm: FormGroup;

  public professores = [
    {id:1, nome:'Luciano', disciplina:'Física'},
    {id:2, nome:'Mauricio', disciplina:'Circuitos Elétricos'},
    {id:3, nome:'Hélio', disciplina:'Máquinas Elétricas'},
    {id:4, nome:'Bruno', disciplina:'Subestações'},
    {id:5, nome:'Rui', disciplina:'Desenhos Técnicos'}
  ];

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder, private modalService: BsModalService) {
    this.criarForm();
   }

  ngOnInit() {
  }

  criarForm(){
    this.professorForm = this.fb.group({
      nome: ['', Validators.required],
      disciplina: ['', Validators.required]
    });
  }

  professorSubmit(){
    console.log(this.professorForm.value);
  }


  public professorSelect(professor: Professor){
    this.professorSelecionado = professor;
    this.professorForm.patchValue(professor);
  }

  public voltar(){
    this.professorSelecionado = null;
  }


}
