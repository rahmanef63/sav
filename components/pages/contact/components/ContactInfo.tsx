import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: <MapPin className="w-5 h-5" />,
    title: 'Alamat',
    content: 'Jl. Example No. 123, Jakarta, Indonesia'
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: 'Telepon',
    content: '+62 123 4567 890'
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: 'Email',
    content: 'info@savinterior.com'
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: 'Jam Kerja',
    content: 'Senin - Jumat: 09:00 - 17:00'
  }
]

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {contactInfo.map((info, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center space-x-4 pb-2">
            {info.icon}
            <CardTitle className="text-lg">{info.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{info.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default ContactInfo
