import React, { Children } from "react";
import CardCadastro from "../CardCadastro/CardCadastro";
import Inputs from "../Inputs/Inputs";
import Button from "../Button/Button";

import { FaUserAlt, FaEnvelope, FaLock } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="w-full bg-cover bg-center bg-custom-img">
      {/* Overlay */}
      <div className="bg-black/30 z-[2]">
        {/* Container */}
        <div className="flex flex-col sm:flex-col xl:flex-row px-[24px] sm:px-[24px] xl:px-[72px] xl:justify-between items-center">
          {/* Container Left */}
          <div className="text-primary-white z-[2] xl:max-w-[623px]">
            <h1 className="xl:text-[56px] md:text-[56px] text-[34px] text-center xl:text-left font-bold leading-[120%] mt-40 [text-shadow:_0_1px_5px_rgb(0_0_0_/_40%)]">
              Com a Move<span className="text-primary-blue">Mentor</span>{" "}
              acompanhar o seus alunos se torna mais fácil.
            </h1>
            <p className="text-[24px] md:text-[30px] xl:text-[30px] text-center xl:text-left font-semibold leading-[120%] mt-6 [text-shadow:_0_1px_4px_rgb(0_0_0_/_50%)]">
              Move<span className="text-primary-blue">Mentor</span> é uma
              plataforma completa para gestão e acompanhamento dos seus alunos.
            </p>
            <div className="flex sm:flex-col flex-col md:flex-row justify-center sm:items-center items-center xl:justify-start gap-5 my-20">
              <Button buttonType="primary" isXlarge>
                Conheça nossos planos
              </Button>
              <Button buttonType="secondary" isXlarge>
                Saiba mais
              </Button>
            </div>
          </div>
          {/* Container Right */}
          <div className="mt-10 text-white z-[2]">
            <CardCadastro title="Cadastre-se!">
              <form action="">
                <div className="relative">
                  <label
                    htmlFor="nome"
                    className="absolute top-[19px] left-4 text-secondary-dark"
                  >
                    <FaUserAlt />
                  </label>
                  <Inputs type="text" placeholder="Nome" />
                </div>
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="absolute top-[19px] left-4 text-secondary-dark"
                  >
                    <FaEnvelope />
                  </label>
                  <Inputs type="email" placeholder="E-mail" />
                </div>
                <div className="relative">
                  <label
                    htmlFor="password"
                    className="absolute top-[19px] left-4 text-secondary-dark"
                  >
                    <FaLock />
                  </label>
                  <Inputs type="password" placeholder="Senha" />
                </div>
                <div className="relative">
                  <label
                    htmlFor="confirm"
                    className="absolute top-[19px] left-4 text-secondary-dark"
                  >
                    <FaLock />
                  </label>
                  <Inputs type="password" placeholder="Confirmar a senha" />
                </div>
                <Button buttonType="primary" isLarge>
                  Finalizar Cadastro
                </Button>
                <div className="flex justify-center items-center mt-10 gap-6">
                  <p>Já tem uma conta?</p>
                  <Button buttonType="secondary" isSmall>
                    Entre aqui!
                  </Button>
                </div>
              </form>
            </CardCadastro>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
