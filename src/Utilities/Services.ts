import { useToast } from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import {
  FORM_MUTATION,
  SUBSCRIBE_MUTATION,
} from "@/graphql/mutations/mutation";

interface ServiceResponse {
  success: boolean;
  message: string;
}
const useService = () => {
  const toast = useToast();
  const [subscribe, { loading }] = useMutation(SUBSCRIBE_MUTATION);
  const [form] = useMutation(FORM_MUTATION);

  const subscribeEmail = async (email: string): Promise<ServiceResponse> => {
    try {
      await subscribe({ variables: { email } });
      toast({
        title: "Sucesso!",
        position: "top",
        description: `O email ${email} foi castrado.`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      return {
        success: true,
        message: `O email ${email} foi cadastrado com sucesso.`,
      };
    } catch (error) {
      toast({
        title: "Erro",
        position: "top",
        description: "Ocorreu um erro ao se inscrever-se.",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
      return { success: false, message: "Ocorreu um erro ao se inscrever." };
    }
  };
  const formContact = async (
    name: string,
    email: string,
    cellPhone: string,
    message: string
  ): Promise<ServiceResponse> => {
    try {
      await form({
        variables: {
          name,
          email,
          cellPhone,
          message,
        },
      });
      toast({
        title: "Sucesso!",
        position: "top",
        description: `Formulário enviado!`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      return {
        success: true,
        message: `O email ${email} foi cadastrado com sucesso.`,
      };
    } catch (error) {
      toast({
        title: "Erro",
        position: "top",
        description: "Ocorreu um erro no envio do formulário.",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
      return { success: false, message: "Ocorreu um erro ao se inscrever." };
    }
  };

  return { subscribeEmail, formContact, loading };
};

export default useService;
