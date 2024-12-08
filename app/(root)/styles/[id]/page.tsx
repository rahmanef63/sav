import { DESIGN_STYLES } from '@/constants/data/quiz-questions/styles';
import { Suspense } from 'react';
import { StyleDetailsContent } from './StyleDetailsContent';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return Object.keys(DESIGN_STYLES).map((id) => ({
    id: id,
  }));
}

interface StyleDetailsProps {
  params: { id: string }
}

export default function StyleDetails({ params }: StyleDetailsProps) {
  const style = DESIGN_STYLES[params.id as keyof typeof DESIGN_STYLES];

  if (!style) {
    notFound();
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StyleDetailsContent style={style} />
    </Suspense>
  );
}