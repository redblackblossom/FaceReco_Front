export default function LoginInput({
  type,
  placeholder,
  isRequired,
  minLength,
  name,
  children,
}) {
  return (
    <div className="self-center w-120 h-24">
      <input
        className="w-96 h-12 pl-4 rounded-lg placeholder:gray-400 "
        type={type}
        placeholder={placeholder}
        required={isRequired}
        minLength={minLength}
        name={name}
      />
      <div className="flex mt-2">{children}</div>
    </div>
  );
}
