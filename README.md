# Single Sign On example app with Scalekit

A simple web application demonstrating Single Sign-On (SSO) authentication using Scalekit, Node.js, Express, and Tailwind CSS. This example shows how to implement secure authentication flows using Scalekit's SSO service.

![App Overview](public/images/login-page.png)

For more screenshots, see the [screenshots folder](public/images).

## Features

- Single Sign-On (SSO) authentication powered by Scalekit
- Secure user authentication and session management
- Profile viewing and management after successful login
- Clean and modern UI using Tailwind CSS
- Server-side rendering with EJS templates
- Example of Scalekit SSO integration

## Setup

You can use either Bun or npm to run this project.

### Using Bun (Recommended)

1. Install dependencies:

```bash
bun install
```

2. Build Tailwind CSS:

```bash
bun run build:css
```

3. Start the server:

```bash
bun run dev
```

### Using npm

1. Install dependencies:

```bash
npm install
```

2. Build Tailwind CSS:

```bash
npm run build:css
```

3. Start the server:

```bash
npm run dev
```

4. Visit http://localhost:3001 in your browser

## Scalekit SDK methods 

```js
const response = await scalekit.authenticateWithCode(code, redirectUri);
```

Example
```js
{
  user: {
    email: 'john@example.com',
    familyName: 'Doe',
    givenName: 'John',
    username: 'john@example.com',
    id: 'conn_70087756662964366;dcc62570-6a5a-4819-b11b-d33d110c7716'
  },
  idToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6InNua183MDA4Nzc1NTQ3MTc4MjAzMCIsInR5cCI6IkpXVCJ9.eyJhbXIiOlsiY29ubl83MDA4Nzc1NjY2Mjk2NDM2NiJdLCJhdF9oYXNoIjoibFZ1clptNE5acTI4LWhvamh5ZlJDUSIsImF1ZCI6WyJza2NfNzAwODc3NTYzMjc0MjAwNDYiXSwiYXpwIjoic2tjXzcwMDg3NzU2MzI3NDIwMDQ2IiwiY19oYXNoIjoiam5oZWhPOXlleE9Ea3BSV2syNzdvZyIsImNsaWVudF9pZCI6InNrY183MDA4Nzc1NjMyNzQyMDA0NiIsImVtYWlsIjoiam9obkBleGFtcGxlLmNvbSIsImV4cCI6MTc1ODk1MjIxNiwiZmFtaWx5X25hbWUiOiJEb2UiLCJnaXZlbl9uYW1lIjoiSm9obiIsImlhdCI6MTc1ODY5MzAxNiwiaXNzIjoiaHR0cHM6Ly9zY2FsZWtpdC03ZWFoY2RpYWFjaGEtZGV2LnNjYWxla2l0LmNsb3VkIiwib2lkIjoib3JnXzcwMDg3NzU2NjQ2MTg3MTUwIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiam9obkBleGFtcGxlLmNvbSIsInNpZCI6InNlc185MTY0NjkxMTgwNjcwMjEyNSIsInN1YiI6ImNvbm5fNzAwODc3NTY2NjI5NjQzNjY7ZGNjNjI1NzAtNmE1YS00ODE5LWIxMWItZDMzZDExMGM3NzE2In0.McnKNpAeU_Z15zHjmZ69gvXeb6GG3oNMrzeqwfM9P-_m7eaQeSngQO1XHa8IK2uAr0bU-a4_TJQPl4itnbALiEdOcl6EUCDPd2FlMCW9q_DFLSYS05Y9jnwd5Jy3tJDloHfRUXrWRiPlQJam9UXkavlYu8stafyecgMYTgt0AQ9ExWT4X--cS9SbyaLQr-qbMWbSBweGO38HdlryDERhxtaUhA8PDck6P4Ou9cAxh6EYDMxC3pir7yqb-4qpDwwwSZ5uZWzgMRGYNIrayXqfBOQU1R86JSguBEoKQtMU08TNxc01d78MU81y_W40ysiccjF0PnVwPKqKnoxOe0bcLQ',
  accessToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6InNua183MDA4Nzc1NTQ3MTc4MjAzMCIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3NjYWxla2l0LTdlYWhjZGlhYWNoYS1kZXYuc2NhbGVraXQuY2xvdWQiLCJzdWIiOiJjb25uXzcwMDg3NzU2NjYyOTY0MzY2O2RjYzYyNTcwLTZhNWEtNDgxOS1iMTFiLWQzM2QxMTBjNzcxNiIsImF1ZCI6WyJza2NfNzAwODc3NTYzMjc0MjAwNDYiXSwiZXhwIjoxNzU4NjkzOTE2LCJpYXQiOjE3NTg2OTMwMTYsIm5iZiI6MTc1ODY5MzAxNiwiY2xpZW50X2lkIjoic2tjXzcwMDg3NzU2MzI3NDIwMDQ2IiwianRpIjoidGtuXzkxNjQ2OTEzMDQ4MjE2MTA5In0.H6qcead6_sy9sg1C0AJ1ON8wmMa8b5tob7pmLaqTN1zbSePWHhMKjoccEKw8fyJgv4dZDaahsRrvpRlPcHAGzmg1a1ZYramla36cn55NslS4pV31ZzW3Fs7yI_hOyFjxF_fmQeLYUGSda-qz2X8eH5IL_Cjj8N_fPhhS8G13jd0yysJ0V61xsoNECRDO4ebZRNUm4fYvEdLIZHw3DIszS7PGbivRNfzG8p1O_LtBTu_zJtGOjUI3cQCx3Jk7XPwAREwq2qJBecQ03gU0WySRY8YRQSeP9amcs2Mqv43vjxkG7Atphnt1g23vkZK30y33L0ylvhepw9k0-wwF3OhVpw',
  expiresIn: 899
}
```

#### Decoded `idToken`
```js
{
  amr: [ 'conn_70087756662964366' ],
  at_hash: 'yMGIBg7BkmIGgD6_dZPEGQ',
  aud: [ 'skc_70087756327420046' ],
  azp: 'skc_70087756327420046',
  c_hash: '4x7qsXnlRw6dRC6twnuENw',
  client_id: 'skc_70087756327420046',
  email: 'john@example.com',
  exp: 1758952038,
  family_name: 'Doe',
  given_name: 'John',
  iat: 1758692838,
  iss: 'https://scalekit-7eahcdiaacha-dev.scalekit.cloud',
  oid: 'org_70087756646187150',
  preferred_username: 'john@example.com',
  sid: 'ses_91646612652163629',
  sub: 'conn_70087756662964366;e964d135-35c7-4a13-a3b4-2579a1cdf4e6'
}
```
#### Decoded access token
```js
{
  "iss": "https://scalekit-7eahcdiaacha-dev.scalekit.cloud",
  "sub": "conn_70087756662964366;dcc62570-6a5a-4819-b11b-d33d110c7716",
  "aud": [
    "skc_70087756327420046"
  ],
  "exp": 1758693916,
  "iat": 1758693016,
  "nbf": 1758693016,
  "client_id": "skc_70087756327420046",
  "jti": "tkn_91646913048216109"
}
```

## Demo Credentials

- Username: demo
- Password: demo123

## Technologies Used

- Scalekit SSO Service
- Bun.js Runtime
- Node.js
- Express.js
- EJS Templates
- Tailwind CSS
- express-session for session management
- bcryptjs for password hashing
