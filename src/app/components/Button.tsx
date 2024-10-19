import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color: 'primary' | 'secondary';
}

export default function Button({ children, color, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'cursor-pointer rounded-3xl h-12 w-full text-center',
        color === 'primary' && 'bg-blue-500 hover:bg-blue-400 text-gray-100',
        color === 'secondary' &&
          'bg-gray-50 hover:bg-gray-300 text-gray-500 hover:text-gray-500 border-2 border-gray-400'
      )}
      {...props}
    >
      {children}
    </button>
  );
}
