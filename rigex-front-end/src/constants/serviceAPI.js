import { gql } from '@apollo/client';

export const SIGN_UP_USER = gql`
  mutation CreateAccount($model: UserInput!) {
    createAccount(model: $model) {
      id
    }
  }
`;

export const LOGIN_USER = gql`
  query Login($userInput: UserInput!) {
    login(model: $userInput) {
      id
      email
    }
  }
`;

export const GET_ALL_ABOUT_TEXT = gql`
  query getAllAboutText {
    getAllAboutText {
      id
      type
      text
    }
  }
`;

export const GET_ALL_RIGS = gql`
  query getAllRigs {
    getAllRigs {
      id
      name
      wells {
        id
        name
        longitude
        latitude
        rigId
      }
    }
  }
`;

export const CREATE_OR_UPDATE_RIG = gql`
  mutation UpsertRig($rigInput: RigInput!) {
    upsertRig(model: $rigInput) {
      id
      name
      wells {
        id
        name
      }
    }
  }
`;

export const UPSERT_WELL = gql`
  mutation upsertWell($wellInput: WellInput!) {
    upsertWell(model: $wellInput) {
      id
      name
      longitude
      latitude
      rigId
    }
  }
`;

export const DELETE_WELL = gql`
  mutation deleteWell($id: String!) {
    deleteWell(id: $id)
  }
`;

export const GET_CONTENT_TEXTS_BY_TYPE = gql`
  query getContentTextsByType($id: String!) {
    getContentTextsByType(id: $id) {
      id
      name
      section
      titleColor
      backgroundColor
      content {
        id
        text
        type
      }
    }
  }
`;

export const GET_ALL_CONTENT_TEXTS_BY_TYPE = gql`
  query getAllContentTextsByType {
    getAllContentTextsByType {
      id
      name
      section
      titleColor
      backgroundColor
      content {
        id
        text
        type
      }
    }
  }
`;
