type Props = {
  href: string;
  text: string;
};

export default function LinkButton(props: Props) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-72 rounded-md bg-gray-500 p-3 text-center hover:bg-transparent"
    >
      {props.text}
    </a>
  );
}
