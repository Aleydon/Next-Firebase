interface FormProps {
  children: React.ReactNode;
  title: string;
}

export default function Form({ children, title }: FormProps) {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div
        className="flex flex-col h-[800px] w-[800px] items-center justify-center 
          shadow-2xl bg-gray-100 p-10 text-xl
          rounded-lg"
      >
        {title}
        <form className="flex flex-col gap-2">{children}</form>
      </div>
    </div>
  );
}
