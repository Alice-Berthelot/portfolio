type TitleProps = {
  title: string;
};

export default function Subtitle({ title }: TitleProps) {
  return <h3 className={`font-title text-xl tracking-wide mb-2`}>{title.toUpperCase()}</h3>;
}
