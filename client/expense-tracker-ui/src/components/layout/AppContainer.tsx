interface Props {
  children: React.ReactNode;
}

export const AppContainer = ({
  children,
}: Props) => {
  return (
    <div className="max-w-[1700px] mx-auto px-6 lg:px-10">
      {children}
    </div>
  );
};