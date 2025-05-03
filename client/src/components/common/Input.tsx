import { InputHTMLAttributes } from 'react';

export const Input = ({
  label,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label: string }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
      />
    </div>
  );
};