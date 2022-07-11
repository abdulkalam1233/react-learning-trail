import { twMerge } from 'tailwind-merge';

function DialogActionButton(props: {
  title: string;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={props.onClick}
      className={twMerge(
        [
          `inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded
           shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg
           transition duration-150 ease-in-out`,
          props?.className ?? '',
        ].join(' ')
      )}
    >
      {props.title}
    </button>
  );
}

export default DialogActionButton;
