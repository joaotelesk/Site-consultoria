import { useToast } from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { client } from "@/lib/apollo";
import {
  FORM_MUTATION,
  SUBSCRIBE_MUTATION,
} from "@/graphql/mutations/mutation";
import {
  GET_FIRST_FOUR_POSTS_QUERY,
  GET_FIRST_FOUR_POSTS_BY_TYPE_QUERY,
  GET_POST_BY_SLUG_QUERY,
  GET_FIRST_FOUR_POSTS_BY_CREATE_QUERY,
  GET_ALL_POSTS_BY_TYPE_QUERY,
  GET_ALL_POSTS_BY_TYPE_ORDER_CREATED_ASC_QUERY,
  GET_ALL_POSTS_BY_TYPE_ORDER_UPDATED_DESC_QUERY,
  GET_ALL_POSTS_BY_TYPE_ORDER_UPDATED_ASC_QUERY,
} from "@/graphql/queries/query";
import { Post } from "@/interfaces";

interface ServiceResponse {
  success: boolean;
  message: string;
}

export const useServiceMutation = () => {
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
        message: `O email ${email} foi cadastrado com sucesso!`,
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

export const useServiceQuery = async () => {
  const data = await client.query<{ posts: Post[] }>({
    query: GET_FIRST_FOUR_POSTS_QUERY,
  });
  const dataCreate = await client.query<{ posts: Post[] }>({
    query: GET_FIRST_FOUR_POSTS_BY_CREATE_QUERY,
  });
  const getFirstFourPosts = (): Post[] => {
    return data.data.posts;
  };
  const getFirstFourPostsByCreate = (): Post[] => {
    return dataCreate.data.posts;
  };
  const getPostBySlug = async (slug: string): Promise<Post | null> => {
    const { data } = await client.query<{ post: Post }>({
      query: GET_POST_BY_SLUG_QUERY,
      variables: {
        slug,
      },
    });
    return data.post || null;
  };

  const getFourPostsByType = async (postType: String | any) => {
    const { data } = await client.query<{ posts: Post[] }>({
      query: GET_FIRST_FOUR_POSTS_BY_TYPE_QUERY,
      variables: {
        postType: postType,
      },
    });
    return data.posts;
  };
  const getAllPostsByType = async (postType: String | any) => {
    const { data } = await client.query<{ posts: Post[] }>({
      query: GET_ALL_POSTS_BY_TYPE_QUERY,
      variables: {
        postType: postType,
      },
    });
    return data.posts;
  };

  const getAllPostsByTypeOrderCreatedAsc = async (postType: String | any) => {
    const { data } = await client.query<{ posts: Post[] }>({
      query: GET_ALL_POSTS_BY_TYPE_ORDER_CREATED_ASC_QUERY,
      variables: {
        postType: postType,
      },
    });
    return data.posts;
  };
  const getAllPostsByTypeOrderUpdatedDes = async (postType: String | any) => {
    const { data } = await client.query<{ posts: Post[] }>({
      query: GET_ALL_POSTS_BY_TYPE_ORDER_UPDATED_DESC_QUERY,
      variables: {
        postType: postType,
      },
    });
    return data.posts;
  };

  const getAllPostsByTypeOrderUpdatedAsc = async (postType: String | any) => {
    const { data } = await client.query<{ posts: Post[] }>({
      query: GET_ALL_POSTS_BY_TYPE_ORDER_UPDATED_ASC_QUERY,
      variables: {
        postType: postType,
      },
    });
    return data.posts;
  };
  return {
    getFirstFourPosts,
    getPostBySlug,
    getFourPostsByType,
    getFirstFourPostsByCreate,
    getAllPostsByType,
    getAllPostsByTypeOrderCreatedAsc,
    getAllPostsByTypeOrderUpdatedDes,
    getAllPostsByTypeOrderUpdatedAsc,
  };
};
