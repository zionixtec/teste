import React from "react";

interface CardProps {
  children: React.ReactNode;
  title: string;
}

const CardCadastro: React.FC<CardProps> = ({ children, title }) => {
  return (
    <div>
      <div className="bg-white/20 rounded-md p-6 mb-10 xl:mb-0">
        <h1 className="text-center font-semibold text-4xl mb-12">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default CardCadastro;
