import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BlurImage } from '@/components/ui/blur-image';
import { StyleResult } from '@/types/data/quiz';

interface ResultCardProps {
  style: StyleResult;
  onConsultation: () => void;
  onViewResults: () => void;
}

export function ResultCard({ style, onConsultation, onViewResults }: ResultCardProps) {
  return (
    <Card className="relative">
      <div className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
        <span className="font-semibold">{style.probability}% Match</span>
      </div>
      
      <CardHeader className="p-0">
        <div className="relative w-full h-64">
          <BlurImage
            src={style.imageUrl}
            alt={style.style}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
      </CardHeader>

      <CardContent className="space-y-6 p-6">
        <div>
          <h3 className="text-2xl font-semibold mb-2">{style.style}</h3>
          <p className="text-muted-foreground">{style.description}</p>
        </div>

        <div className="bg-muted p-4 rounded-lg space-y-4">
          <div>
            <h4 className="font-medium">This style matches your preferences the most!</h4>
            <p className="text-sm text-muted-foreground">Would you like to schedule a consultation?</p>
          </div>
          
          <div className="flex gap-3">
            <Button onClick={onConsultation} className="flex-1">
              Schedule Consultation
            </Button>
            <Button variant="outline" onClick={onViewResults} className="flex-1">
              View Full Results
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 