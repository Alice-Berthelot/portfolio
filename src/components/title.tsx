type TitleProps = {
  title: string;
};

export default function Title({ title }: TitleProps) {
  return <h2 className={`font-title text-4xl tracking-wide pt-16 mb-12`}>{title.toUpperCase()}</h2>;
}
