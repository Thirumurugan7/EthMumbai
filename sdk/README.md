# OneSign SDK

OneSign SDK is a comprehensive development toolkit designed to simplify and enhance the user onboarding process for decentralized applications (DApps). By providing a set of easy-to-use components, OneSign SDK aims to streamline the integration of sign-in and registration functionalities, making the onboarding experience seamless for developers and users alike.

## Features

- **Sign Component**: Simplifies the authentication process for users already registered.
- **Register Component**: Provides an easy-to-integrate user registration interface, supporting a wide range of authentication methods.

## Getting Started

Follow these steps to integrate OneSign SDK into your DApp.

### Installation

Start by installing the `OneSign` package using npm. Open your terminal and run:

```bash
npm install OneSign
```

# Importing Components
After installation, you can import the Sign and Register components into your project as follows:

### Sign Component
To import the Sign component:

```javascript
import { Sign } from 'OneSign';
```


### Register Component
To import the Register component:

```javascript

import { Register } from 'OneSign';
```

```javascript
<Sign onSuccess={handleSuccess} onError={handleError} />
```

onSuccess: A callback function that is invoked when the sign-in process is successful.
onError: A callback function that is invoked in case of an error during the sign-in process.
Register Component
Similarly, the Register component can be used to embed a registration form within your DApp:

```javascript
<Register onSuccess={handleSuccess} onError={handleError} />
```
onSuccess: A callback function that is called when the registration is successful.
onError: A callback function that is called if there is an error during the registration process.
Documentation
For detailed documentation on all features and components provided by OneSign SDK, including advanced configurations and examples, please visit our official documentation.

### Support
If you encounter any issues or have questions regarding the OneSign SDK, please file an issue on our GitHub repository or contact our support team.

### Contributing
We welcome contributions from the community! If you're interested in improving the OneSign SDK, see our contributing guidelines for more information.

