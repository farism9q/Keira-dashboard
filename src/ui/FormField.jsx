const FormField = ({ children, error = "" }) => {
  return (
    <div className="grid grid-cols-[4rem_1fr_0.5fr] w-full items-center gap-4">
      {children}
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
};

export default FormField;
