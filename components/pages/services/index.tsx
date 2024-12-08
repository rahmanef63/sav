import React from 'react'
import {ServiceList} from './components/ServiceList'

const ServicesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Layanan Interior</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Temukan berbagai layanan desain interior profesional yang kami tawarkan
      </p>
      <ServiceList />
    </div>
  )
}

export default ServicesPage
