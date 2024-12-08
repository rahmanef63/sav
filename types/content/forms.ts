// Base form field interface
export interface FormField {
  id: string
  name: string
  label: string
  type: FormFieldType
  required?: boolean
  placeholder?: string
  helpText?: string
  disabled?: boolean
  hidden?: boolean
  validation?: FormValidation
  defaultValue?: any
}

export type FormFieldType =
  | 'text'
  | 'textarea'
  | 'email'
  | 'password'
  | 'number'
  | 'tel'
  | 'select'
  | 'multiselect'
  | 'radio'
  | 'checkbox'
  | 'file'
  | 'date'
  | 'time'
  | 'datetime'

export interface FormValidation {
  required?: {
    value: boolean
    message: string
  }
  min?: {
    value: number
    message: string
  }
  max?: {
    value: number
    message: string
  }
  minLength?: {
    value: number
    message: string
  }
  maxLength?: {
    value: number
    message: string
  }
  pattern?: {
    value: RegExp
    message: string
  }
  custom?: {
    validator: (value: any) => boolean | Promise<boolean>
    message: string
  }
}

// Specific field types
export interface TextField extends FormField {
  type: 'text' | 'email' | 'password' | 'tel'
  maxLength?: number
  minLength?: number
}

export interface TextAreaField extends FormField {
  type: 'textarea'
  rows?: number
  maxLength?: number
}

export interface SelectField extends FormField {
  type: 'select' | 'multiselect'
  options: SelectOption[]
  multiple?: boolean
}

export interface SelectOption {
  value: string | number
  label: string
  disabled?: boolean
}

export interface RadioField extends FormField {
  type: 'radio'
  options: RadioOption[]
}

export interface RadioOption {
  value: string | number
  label: string
  disabled?: boolean
}

export interface CheckboxField extends FormField {
  type: 'checkbox'
  checked?: boolean
}

export interface FileField extends FormField {
  type: 'file'
  accept?: string
  multiple?: boolean
  maxSize?: number // in bytes
  allowedTypes?: string[]
}

export interface DateTimeField extends FormField {
  type: 'date' | 'time' | 'datetime'
  min?: string
  max?: string
}

// Form configuration
export interface FormConfig {
  id: string
  title: string
  description?: string
  fields: FormField[]
  submitButton: {
    text: string
    variant?: string
  }
  cancelButton?: {
    text: string
    variant?: string
  }
  successMessage?: string
  errorMessage?: string
  layout?: 'vertical' | 'horizontal'
  spacing?: 'compact' | 'normal' | 'relaxed'
}
