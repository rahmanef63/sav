interface PageHeaderProps {
  heading: string;
  subheading?: string;
  text?: string;
}

export function PageHeader({ heading, subheading, text }: PageHeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center py-12 md:py-16 lg:py-20">
      {subheading && (
        <p className="text-sm md:text-base font-medium text-primary">
          {subheading}
        </p>
      )}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
        {heading}
      </h1>
      {text && (
        <p className="max-w-[700px] text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
          {text}
        </p>
      )}
    </div>
  );
}
