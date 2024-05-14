type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span
      className={`inline-flex items-center gap-x-3 text-gray-900 ${fontStyle}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-microscope"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#00abfb"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 21h14" />
        <path d="M6 18h2" />
        <path d="M7 18v3" />
        <path d="M9 11l3 3l6 -6l-3 -3z" />
        <path d="M10.5 12.5l-1.5 1.5" />
        <path d="M17 3l3 3" />
        <path d="M12 21a6 6 0 0 0 3.715 -10.712" />
      </svg>
      <span className="text-xl md:text-2xl">LTGA</span>
    </span>
  );
};

export { Logo };
