'use client';

import { useState } from 'react';
import { ServiceCard } from './ServiceCard';
import { ServiceDetailsModal } from './ServiceDetailsModal';
import { SERVICES } from '@/constants/data/services';
import { Service } from '@/types/data/services';

export const ServiceList = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onViewDetails={() => setSelectedService(service)}
          />
        ))}
      </div>

      {selectedService && (
        <ServiceDetailsModal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          service={selectedService}
        />
      )}
    </>
  );
};
