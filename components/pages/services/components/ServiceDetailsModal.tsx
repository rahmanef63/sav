'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Service } from "@/types/data/services";
import { cn } from "@/lib/utils";

interface ServiceDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service;
}

export const ServiceDetailsModal = ({
  isOpen,
  onClose,
  service
}: ServiceDetailsModalProps) => {
  const { 
    title,
    description,
    features,
    pricing,
    faqs,
    process
  } = service;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            {title}
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">Fitur</TabsTrigger>
            <TabsTrigger value="pricing">Harga</TabsTrigger>
            <TabsTrigger value="process">Proses</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="prose max-w-none">
              <p className="text-gray-600">{description}</p>
            </div>
          </TabsContent>

          <TabsContent value="features" className="mt-6">
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  {feature.icon && (
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-primary">{feature.icon}</span>
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pricing" className="mt-6">
            <div className="grid md:grid-cols-3 gap-6">
              {pricing.map((plan, index) => (
                <div
                  key={index}
                  className={cn(
                    "rounded-lg border p-6",
                    plan.isPopular && "border-primary bg-primary/5"
                  )}
                >
                  <h3 className="font-semibold text-lg mb-2">{plan.name}</h3>
                  <p className="text-3xl font-bold mb-2">
                    Rp {plan.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <span className="text-primary">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={plan.isPopular ? "default" : "outline"}
                  >
                    Pilih Paket
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="process" className="mt-6">
            <div className="space-y-6">
              {process.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-semibold">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end gap-4 mt-6">
          <Button
            variant="outline"
            onClick={onClose}
          >
            Tutup
          </Button>
          <Button>
            Konsultasi Sekarang
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
