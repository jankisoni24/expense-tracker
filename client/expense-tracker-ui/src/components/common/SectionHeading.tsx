interface Props {
  title: string;
  subtitle?: string;
}

export const SectionHeading = ({
  title,
  subtitle,
}: Props) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold">
        {title}
      </h2>

      {subtitle && (
        <p className="text-muted-foreground mt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
};