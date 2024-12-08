import { Card, CardContent } from '@/components/ui/card';
import { BlurImage } from '@/components/ui/blur-image';
import { cn } from '@/lib/utils';

interface QuizOptionProps {
  id: string;
  text: string;
  imageUrl?: string;
  isSelected: boolean;
  onClick: () => void;
}

export function QuizOption({ id, text, imageUrl, isSelected, onClick }: QuizOptionProps) {
  return (
    <Card
      key={id}
      className={cn(
        "cursor-pointer transition-all",
        !imageUrl && "h-full flex items-center",
        isSelected ? "ring-2 ring-primary" : "hover:ring-2 hover:ring-primary/50"
      )}
      onClick={onClick}
    >
      <CardContent className={cn(
        "p-0",
        !imageUrl && "h-full flex flex-col justify-center"
      )}>
        {imageUrl ? (
          <>
            <div className="relative w-full h-48">
              <BlurImage
                src={imageUrl}
                alt={text}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-medium">{text}</h3>
            </div>
          </>
        ) : (
          <div className="p-6 text-center h-full flex items-center justify-center">
            <h3 className="font-medium text-lg">{text}</h3>
          </div>
        )}
      </CardContent>
    </Card>
  );
} 