import React, { useState } from 'react';
import styles from './Demo.module.css';
import Header from '../../components/Header/Header';
import axios from 'axios';
import appSyncConfig from "../../aws-exports";
import { createAuthLink } from "aws-appsync-auth-link";
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";

import { ApolloLink } from "@apollo/client";
import { createHttpLink } from "@apollo/client";
import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";
import { ApolloProvider } from "@apollo/client";
import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";

const url = appSyncConfig.aws_appsync_graphqlEndpoint;
const region = appSyncConfig.aws_appsync_region;
const auth = {
  type: appSyncConfig.aws_appsync_authenticationType,
  apiKey: appSyncConfig.aws_appsync_apiKey,
  // jwtToken: async () => token, // Required when you use Cognito UserPools OR OpenID Connect. token object is obtained previously
  // credentials: async () => credentials, // Required when you use IAM-based auth.
};

const httpLink = createHttpLink({ uri: url });

const link = ApolloLink.from([
  createAuthLink({ url, region, auth }),
  createSubscriptionHandshakeLink({ url, region, auth }, httpLink),
]);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

function UPS(props) {
  const UPSPageJSX = [
    <ApolloProvider client={client}>
      <UPSComponent />
    </ApolloProvider>,
  ];
  return UPSPageJSX;
}


function UPSComponent(props) {
  const sendMessageMutation = gql`
      mutation MyMutation($conversationId: ID!, $id: ID!, $content: String!, $createdAt: String!) {
        createMessage(conversationId: $conversationId, id: $id, content: $content, createdAt: $createdAt) {
          content
          conversationId
          createdAt
          id
          isSent
          sender
        }
      }
      `
  const [deliveryInfo, setDeliveryInfo] = useState({ mailID: null, address: { traffic: false, tree: false, concrete: false, brick: false } });
  const [sendMessageFunction, { data, loading, error }] = useMutation(sendMessageMutation);
  let newDeliveryInfo = { ...deliveryInfo };
  if (!loading && error) {
    console.warn(error);
  }

  function handleChange(event) {
    let newDeliveryInfo = { ...deliveryInfo };
    newDeliveryInfo[event.target.name] = event.target.value
    setDeliveryInfo(newDeliveryInfo);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    let address = "";
    for (let [k, v] of Object.entries(deliveryInfo.address)) {
      if (v) address += k + ",";
    }
    if (address.length !== 0) address = address.slice(0, -1);
    const api = 'https://q9hhz3z4p7.execute-api.us-east-1.amazonaws.com/dev/submitmail'
    const data = { 'MailID': deliveryInfo.mailID, 'Address': address }

    axios
      .post(api, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.warn(error);
      });
    sendMessageFunction({
      variables: {
        conversationId: deliveryInfo.mailID,
        id: "Demo-Delivery",
        content: address,
        createdAt: Date.now(),
      }
    });
  }

  return (
    <div>
      <form className="mt-5 py-5 px-5" onSubmit={(e) => { handleSubmit(e) }}>
        <div className={styles.logInBox}>
          <p className={styles.text}>Fill in the form below to submit a mail. Each stop takes 1-2 minutes! </p>
        </div>
        <div className={styles.logInBox}>
          <input className={styles.formcontrol2} placeholder="Your Name" name="mailID" type="mailID" onChange={(e) => { handleChange(e) }} value={deliveryInfo.mailID}></input>
        </div>
        <li key={0}>
          <div className={styles.logInBox}>
            <input
              type="checkbox"
              key={"test key"}
              name={"address"}
              onChange={(e) => {
                newDeliveryInfo.address.traffic = !newDeliveryInfo.address.traffic;
                setDeliveryInfo(newDeliveryInfo);
              }}
              value={"test"} /> Between the Traffic
          </div>
        </li>
        <li key={1}>
          <div className={styles.logInBox}>
            <input
              type="checkbox"
              key={"test key"}
              name={"address"}
              onChange={(e) => {
                newDeliveryInfo.address.tree = !newDeliveryInfo.address.tree;
                setDeliveryInfo(newDeliveryInfo);
              }}
              value={"test"} /> Into the Tree
          </div>
        </li>
        <li key={2}>
          <div className={styles.logInBox}>
            <input
              type="checkbox"
              key={"test key"}
              name={"address"}
              onChange={(e) => {
                newDeliveryInfo.address.concrete = !newDeliveryInfo.address.concrete;
                setDeliveryInfo(newDeliveryInfo);
              }}
              value={"test"} /> Concrete Plaza
          </div>
        </li>
        <li key={3}>
          <div className={styles.logInBox}>
            <input
              type="checkbox"
              key={"test key"}
              name={"address"}
              onChange={(e) => {
                newDeliveryInfo.address.brick = !newDeliveryInfo.address.brick;
                setDeliveryInfo(newDeliveryInfo);
              }}
              value={"test"} /> Brick Plaza
          </div>
        </li>
        <div className={styles.logInBox}>
          <div className="form-group">
            <button className={styles.signUpButton} type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>

  )
}

export default UPS;
