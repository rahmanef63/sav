import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Nama</Label>
        <Input id="name" placeholder="Nama lengkap" required />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="email@example.com" required />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone">Nomor Telepon</Label>
        <Input id="phone" type="tel" placeholder="+62..." required />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Pesan</Label>
        <Textarea
          id="message"
          placeholder="Tulis pesan Anda di sini..."
          className="min-h-[150px]"
          required
        />
      </div>
      
      <Button type="submit" className="w-full">
        Kirim Pesan
      </Button>
    </form>
  )
}

export default ContactForm
