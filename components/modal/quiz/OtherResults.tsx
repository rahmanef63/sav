import { Card, CardContent } from '@/components/ui/card';
import { StyleResult } from '@/types/data/quiz';

interface OtherResultsProps {
  results: StyleResult[];
}

export function OtherResults({ results }: OtherResultsProps) {
  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold">Other Matching Styles</h4>
      <div className="grid gap-4">
        {results.map((style) => (
          <Card key={style.style} className="hover:bg-muted/50 transition-colors">
            <CardContent className="flex items-start justify-between p-4">
              <div className="space-y-1">
                <h5 className="font-medium">{style.style}</h5>
                <p className="text-sm text-muted-foreground">{style.description}</p>
              </div>
              <span className="font-semibold whitespace-nowrap ml-4">
                {style.probability}% Match
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 