"use client";

import Button from "../Button";

type CreateClinicResponseMessageProps = {
  title: string;
  message?: string;
  icon: "error" | "success";
  onClose: () => void;
};

const CreateClinicResponseMessage = ({
  title,
  message,
  icon,
  onClose,
}: CreateClinicResponseMessageProps) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg px-16 py-12 max-w-xl">
      <h2 className="font-bold text-4xl text-center">{title}</h2>
      <div>
        <img
          src={`/${icon}.png`}
          alt={icon}
          className="w-32 h-32 mx-auto my-8"
        />
      </div>
      {message && <p className="mb-8 font-medium text-md">{message}</p>}
      <Button onClick={onClose}>
        <p className="font-medium">Return to dashboard</p>
      </Button>
    </div>
  );
};

export default CreateClinicResponseMessage;
