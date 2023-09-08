import { Component, EventEmitter, Output } from '@angular/core';
import { CredentialService } from '../../../services/credential.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent {
  @Output() nextClicked: EventEmitter<void> = new EventEmitter<void>();
  usernameForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private credentialService: CredentialService
    ) {
      this.usernameForm = this.formBuilder.group({
        username: ['', Validators.required] // Set Validators.required to enforce non-empty input
      });
    }

  onNextClick()  {
    if (this.usernameForm.valid) {
        const username = this.usernameForm.get('username')!.value;
        this.credentialService.setTypedUsername(username);
        this.nextClicked.emit();
    }
  }
}
