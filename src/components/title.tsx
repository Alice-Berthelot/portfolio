type TitleProps = {
  title: string;
  margin: string;
};

export default function Title({ title, margin }: TitleProps) {
  return <h2 className={`font-title text-4xl tracking-wide ${margin} mb-6`}>{title.toUpperCase()}</h2>;
}
