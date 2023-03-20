// Components
import {
  ModalBody,
  ModalContent,
  Box,
  useDisclosure,
  Modal,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import { HiCheck } from "react-icons/hi";

// Hooks
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

// Interfaces
interface CheckboxChangeEvent extends React.ChangeEvent<HTMLInputElement> {
  target: HTMLInputElement & {
    value: string;
    checked: boolean;
  };
}
interface FilterProps {
  onClick: (newValue: string) => void;
}

export function Filter({ onClick }: FilterProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");

  const router = useRouter();

  useEffect(() => {
    const path = router.asPath;
    if (path.includes("dicas")) {
      setSelectedOption1("dicas");
    } else if (path.includes("italia")) {
      setSelectedOption1("italia");
    } else if (path.includes("portugal")) {
      setSelectedOption1("portugal");
    }
  }, [router.asPath]);

  const handleOption1Change = (event: CheckboxChangeEvent | any) => {
    setSelectedOption1(event.target.value);
  };
  const handleOption2Change = (event: CheckboxChangeEvent | any) => {
    setSelectedOption2(event.target.value);
  };
  const handleOption3Change = (event: CheckboxChangeEvent | any) => {
    setSelectedOption3(event.target.value);
  };

  const handleButtonClick = () => {
    switch (selectedOption1) {
      case "dicas":
        router.push("/blog/dicas");
        break;
      case "italia":
        router.push("/blog/italia");
        break;
      case "portugal":
        router.push("/blog/portugal");
        break;
      default:
        break;
    }
    switch (selectedOption2) {
      case "criacao":
        switch (selectedOption3) {
          case "crecente":
            onClick("criacaoCrescente");
            break;
          case "decrescente":
            onClick("criacaoDecrescente");
            break;
          default:
            onClick("criacaoCrescente");
            break;
        }
        break;
      case "atualizacao":
        switch (selectedOption3) {
          case "crecente":
            onClick("atualizacaoCrescente");
            break;
          case "decrescente":
            onClick("atualizacaoDecrescente");
            break;
          default:
            onClick("atualizacaoCrescente");
            break;
        }
        break;
      default:
        onClick("criacaoCrescente");
    }
  };

  const handleButtonClearClick = () => {
    setSelectedOption2("");
    setSelectedOption3("");
    onClose();
  };

  const activeSelects = [
    selectedOption1,
    selectedOption2,
    selectedOption3,
  ].filter((selected) => selected).length;
  return (
    <>
      <div className="flex gap-x-3 text-green-500">
        <BsFilter size={25} className="cursor-pointer" onClick={onOpen} />
        <span>Filtros:</span>
        <div className="border items-center px-2 border-green-500 font-bold rounded-[100%]">
          {activeSelects}
        </div>
        <Modal onClose={onClose} isOpen={isOpen} isCentered size="xs">
          <ModalContent borderRadius={0}>
            <ModalBody>
              <Accordion
                defaultIndex={[0]}
                className="text-green-500 font-medium"
                allowToggle
                borderColor="transparent"
              >
                <AccordionItem>
                  <h2>
                    <AccordionButton _hover={{ bg: "transparent" }} m={0} p={0}>
                      <Box
                        as="span"
                        flex="1"
                        className="border-b border-green-500 my-2 flex justify-between "
                      >
                        Temas
                        <AccordionIcon />
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    m={0}
                    p={0}
                    pb={3}
                    className="flex flex-col gap-y-3 "
                  >
                    <label className="mt-4 flex px-0 gap-x-2 items-center">
                      <input
                        className="hidden"
                        type="checkbox"
                        value="dicas"
                        checked={selectedOption1 === "dicas"}
                        onChange={handleOption1Change}
                      />
                      <div
                        className={`appearance-none flex justify-center items-center cursor-pointer border border-green-500 h-5 w-5 rounded-sm ${
                          selectedOption1 === "dicas"
                            ? "bg-green-500 "
                            : "bg-white-500"
                        } `}
                      >
                        <HiCheck
                          className={`${
                            selectedOption1 === "dicas"
                              ? "text-white-500 "
                              : "text-white-500"
                          }`}
                        />
                      </div>
                      Dicas Imigrei
                    </label>
                    <label className="flex px-0 gap-x-2 items-center">
                      <input
                        className="hidden "
                        type="checkbox"
                        value="italia"
                        checked={selectedOption1 === "italia"}
                        onChange={handleOption1Change}
                      />
                      <div
                        className={`appearance-none flex justify-center items-center cursor-pointer border border-green-500 h-5 w-5 rounded-sm ${
                          selectedOption1 === "italia"
                            ? "bg-green-500 "
                            : "bg-white-500"
                        } `}
                      >
                        <HiCheck
                          className={`${
                            selectedOption1 === "italia"
                              ? "text-white-500 "
                              : "text-white-500"
                          }`}
                        />
                      </div>
                      Itália
                    </label>

                    <label className="flex px-0 gap-x-2 items-center">
                      <input
                        className="hidden"
                        type="checkbox"
                        value="portugal"
                        checked={selectedOption1 === "portugal"}
                        onChange={handleOption1Change}
                      />
                      <div
                        className={`appearance-none flex justify-center items-center cursor-pointer border border-green-500 h-5 w-5 rounded-sm ${
                          selectedOption1 === "portugal"
                            ? "bg-green-500 "
                            : "bg-white-500"
                        } `}
                      >
                        <HiCheck
                          className={`${
                            selectedOption1 === "portugal"
                              ? "text-white-500 "
                              : "text-white-500"
                          }`}
                        />
                      </div>
                      Portugal
                    </label>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton _hover={{ bg: "transparent" }} m={0} p={0}>
                      <Box
                        as="span"
                        flex="1"
                        className="border-b border-green-500 my-2 flex justify-between "
                      >
                        Data
                        <AccordionIcon />
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    m={0}
                    p={0}
                    pb={3}
                    className="flex flex-col gap-y-3 "
                  >
                    <label className="mt-4 flex px-0 gap-x-2 items-center">
                      <input
                        className="hidden"
                        type="checkbox"
                        value="criacao"
                        checked={selectedOption2 === "criacao"}
                        onChange={handleOption2Change}
                      />
                      <div
                        className={`appearance-none flex justify-center items-center cursor-pointer border border-green-500 h-5 w-5 rounded-sm ${
                          selectedOption2 === "criacao"
                            ? "bg-green-500 "
                            : "bg-white-500"
                        } `}
                      >
                        <HiCheck
                          className={`${
                            selectedOption2 === "criacao"
                              ? "text-white-500 "
                              : "text-white-500"
                          }`}
                        />
                      </div>
                      Criação
                    </label>
                    <label className="flex px-0 gap-x-2 items-center">
                      <input
                        className="hidden"
                        type="checkbox"
                        value="atualizacao"
                        checked={selectedOption2 === "atualizacao"}
                        onChange={handleOption2Change}
                      />
                      <div
                        className={`appearance-none flex justify-center items-center cursor-pointer border border-green-500 h-5 w-5 rounded-sm ${
                          selectedOption2 === "atualizacao"
                            ? "bg-green-500 "
                            : "bg-white-500"
                        } `}
                      >
                        <HiCheck
                          className={`${
                            selectedOption2 === "atualizacao"
                              ? "text-white-500 "
                              : "text-white-500"
                          }`}
                        />
                      </div>
                      Atualização
                    </label>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton _hover={{ bg: "transparent" }} m={0} p={0}>
                      <Box
                        as="span"
                        flex="1"
                        className="border-b border-green-500 my-2 flex justify-between "
                      >
                        Ordenar por
                        <AccordionIcon />
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    m={0}
                    p={0}
                    pb={3}
                    className="flex flex-col gap-y-3"
                  >
                    <label className="mt-4 flex px-0 gap-x-2 items-center">
                      <input
                        className="hidden"
                        type="checkbox"
                        value="crescente"
                        checked={selectedOption3 === "crescente"}
                        onChange={handleOption3Change}
                      />
                      <div
                        className={`appearance-none flex justify-center items-center cursor-pointer border border-green-500 h-5 w-5 rounded-sm ${
                          selectedOption3 === "crescente"
                            ? "bg-green-500 "
                            : "bg-white-500"
                        } `}
                      >
                        <HiCheck
                          className={`${
                            selectedOption3 === "crescente"
                              ? "text-white-500 "
                              : "text-white-500"
                          }`}
                        />
                      </div>
                      Ordem crescente
                    </label>
                    <label className="flex px-0 gap-x-2 items-center">
                      <input
                        className="hidden"
                        type="checkbox"
                        value="decrescente"
                        checked={selectedOption3 === "decrescente"}
                        onChange={handleOption3Change}
                      />
                      <div
                        className={`appearance-none flex justify-center items-center cursor-pointer border border-green-500 h-5 w-5 rounded-sm ${
                          selectedOption3 === "decrescente"
                            ? "bg-green-500 "
                            : "bg-white-500"
                        } `}
                      >
                        <HiCheck
                          className={`${
                            selectedOption3 === "decrescente"
                              ? "text-white-500 "
                              : "text-white-500"
                          }`}
                        />
                      </div>
                      Ordem decrescente
                    </label>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <button
                onClick={handleButtonClick}
                className="mt-10 w-full tags text-base self-start bg-green-500 text-white-500"
              >
                filtrar
              </button>
              <button
                onClick={handleButtonClearClick}
                className="mt-1 mb-5 w-full tags text-base border border-green-500 self-start bg-white-500 text-green-500"
              >
                Limpar
              </button>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}
