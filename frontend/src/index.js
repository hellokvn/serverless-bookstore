import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Amplify from 'aws-amplify';

Amplify.configure({
  Auth: {
    region: 'eu-central-1',
    userPoolId: 'eu-central-1_Vb06QSXp4',
    // identityPoolId: 'eu-central-1:0f20c5f8-269c-48f8-86d4-2d1d05910a49',
    userPoolWebClientId: '5j5a9i05bbkim62gbff5p2b2pu',
    mandatorySignIn: false,
  },
});

const myAppConfig = {
  aws_appsync_graphqlEndpoint: 'https://3pkorcubnja2dfehbxmf32kwqa.appsync-api.eu-central-1.amazonaws.com/graphql',
  aws_appsync_region: 'eu-central-1',
  aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
};

Amplify.configure(myAppConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
