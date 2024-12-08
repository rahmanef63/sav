'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Service } from "@/types/data/services";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  onViewDetails: () => void;
}

export const ServiceCard = ({ service, onViewDetails }: ServiceCardProps) => {
  const { title, shortDescription, icon } = service;
  
  return (
    <Card className={cn(
      "overflow-hidden transition-all hover:shadow-lg",
      "cursor-pointer hover:scale-[1.02]"
    )}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon && <span className="text-primary">{icon}</span>}
          {title}
        </CardTitle>
        <CardDescription>
          {shortDescription}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Features Preview */}
          <div className="grid grid-cols-2 gap-2">
            {service.features.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                {feature.icon && <span className="text-primary mt-1">{feature.icon}</span>}
                <span className="text-sm text-muted-foreground">{feature.title}</span>
              </div>
            ))}
          </div>
          
          {/* Pricing Preview */}
          <div className="pt-4 border-t">
            <p className="text-sm text-muted-foreground mb-4">
              Mulai dari{" "}
              <span className="font-semibold text-primary">
                Rp {service.pricing[0].price.toLocaleString()}
              </span>
            </p>
            <Button
              onClick={onViewDetails}
              className="w-full"
            >
              Lihat Detail
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
