import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const PartnerForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Nama Lengkap</Label>
        <Input id="name" placeholder="Nama lengkap" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Nama Perusahaan</Label>
        <Input id="company" placeholder="Nama perusahaan (jika ada)" />
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
        <Label htmlFor="experience">Pengalaman</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Pilih pengalaman" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1-2">1-2 tahun</SelectItem>
            <SelectItem value="3-5">3-5 tahun</SelectItem>
            <SelectItem value="5+">Lebih dari 5 tahun</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="portfolio">Portfolio</Label>
        <Input id="portfolio" type="file" multiple accept="image/*" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Pesan</Label>
        <Textarea
          id="message"
          placeholder="Ceritakan tentang diri Anda dan pengalaman Anda..."
          className="min-h-[150px]"
          required
        />
      </div>

      <Button type="submit" className="w-full">
        Kirim Pendaftaran
      </Button>
    </form>
  )
}

export default PartnerForm
