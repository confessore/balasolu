export default function FlexColumn({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-3 py-5">
      {children}
    </div>
  );
}
