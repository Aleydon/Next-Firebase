import clsx from 'clsx';

interface TitleProps {
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
}

export default function Title({ size, children }: TitleProps) {
  return (
    <h1
      className={clsx(
        'mb-7 bold',
        size === 'small' && 'Title-sm',
        size === 'medium' && 'Title-base',
        size === 'large' && 'Title-xl'
      )}
    >
      {children}
    </h1>
  );
}
