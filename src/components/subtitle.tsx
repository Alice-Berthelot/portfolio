type TitleProps = {
  title: string;
};

export default function Subtitle({ title }: TitleProps) {
  return <h3 className={`font-title text-xl tracking-wide text-center`}>{title.toUpperCase()}</h3>;
}
