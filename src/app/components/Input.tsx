interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: InputProps) {
  return (
    <input
      {...props}
      className="rounded-lg p-3 min-w-96 bg-gray-100 mt-2 mb-2
       border-slate-400 border-2 placeholder-slate-400
        focus:border-gray-500 focus:outline-none text-gray-600"
    />
  );
}
