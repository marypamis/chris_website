import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    contactForm: FormGroup;
    isSubmitting = false;
    submitSuccess = false;
    submitError = false;

    constructor(private fb: FormBuilder) {
        this.contactForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            subject: ['', Validators.required],
            message: ['', Validators.required]
        });
    }

    onSubmit() {
        if (this.contactForm.valid) {
            this.isSubmitting = true;

            const formData = new FormData();
            formData.append('form-name', 'contact');
            Object.keys(this.contactForm.value).forEach(key => {
                formData.append(key, this.contactForm.value[key]);
            });

            fetch('/', {
                method: 'POST',
                body: formData
            })
                .then(() => {
                    this.submitSuccess = true;
                    this.isSubmitting = false;
                    this.contactForm.reset();
                })
                .catch((error) => {
                    console.error('Submission error:', error);
                    this.submitError = true;
                    this.isSubmitting = false;
                });
        }
    }
}
