import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/shared/core/base.component';
import { IReplacement } from 'src/app/shared/interface/replacement.interface';
import { ReplacementService } from 'src/app/shared/services/replacement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-spareparts-manager',
  templateUrl: './spareparts-manager.component.html',
  styleUrls: ['./spareparts-manager.component.scss']
})
export class SparepartsManagerComponent extends BaseComponent implements OnInit {

  public id: any = this.ActiveRoute.snapshot.paramMap.get('id');
  public imagenes:string[] = [
    'alimentos',
    'entretenimiento',
    'ferreteros'
  ]

  public url: string = 'assets/img/products/ferreteros.png';
  private fileName: string  = 'pepito.png';

  constructor(
    public location: Location,
    public replacementService: ReplacementService,
    private ActiveRoute: ActivatedRoute,
    private fb: FormBuilder,
    private route: Router,
  ) { super()}

  ngOnInit(): void {

    this.form = this.fb.group({
      image: ['', Validators.required],
      sparePart: ['', Validators.required],
      brand: ['', Validators.required],
      code: ['', Validators.required]
    })

    if (this.id) {
      this.getValuesForm();
    }
  }

  async getValuesForm(): Promise<void> { 
    try {
      const result: IReplacement = await this.replacementService.getById(this.id);

      this.form.patchValue({
        image: this.url,
        sparePart: result.sparePart,
        brand: result.brand,
        code: result.code
      });
    } catch(error) {
      console.error(error);
    }
   }

   onselectedFile(event) {
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
        const file = event.target.files[0];
        reader.readAsText(event.target.files[0]);
        const fileN = file.name;
        this.fileName = fileN;
        this.form.patchValue({ image: this.fileName });
      }
    }
   }

   async submit(): Promise<any> {
    if (this.form.invalid) { return this.handleError('Campos invalidos'); }

    if (this.id) {
      await this.replacementService.update(this.id, this.form.value);
    } else {
      await this.replacementService.create(this.form.value);
    }

    this.route.navigate(['/products/list']);
    return this.handleSuccess('success');
   }

}
