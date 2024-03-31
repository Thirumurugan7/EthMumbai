# OnSign SDK

OnSign SDK is a comprehensive development toolkit designed to simplify and enhance the user onboarding process for decentralized applications (DApps). By providing a set of easy-to-use components, OnSign SDK aims to streamline the integration of sign-in and registration functionalities, making the onboarding experience seamless for developers and users alike.

## Features

- **Sign Component**: Simplifies the authentication process for users already registered.
- **Register Component**: Provides an easy-to-integrate user registration interface, supporting a wide range of authentication methods.

## Getting Started

Follow these steps to integrate OnSign SDK into your DApp.

### Installation

Start by installing the `onsign` package using npm. Open your terminal and run:

```bash
npm install onsign
```


Importing Components
After installation, you can import the Sign and Register components into your project as follows:

Sign Component
To import the Sign component:

javascript
Copy code
import { Sign } from 'onsign';
Register Component
To import the Register component:

javascript
Copy code
import { Register } from 'onsign';
Usage
Sign Component
The Sign component can be integrated into your DApp to provide a straightforward sign-in interface:

jsx
Copy code
<Sign onSuccess={handleSuccess} onError={handleError} />
onSuccess: A callback function that is invoked when the sign-in process is successful.
onError: A callback function that is invoked in case of an error during the sign-in process.
Register Component
Similarly, the Register component can be used to embed a registration form within your DApp:

jsx
Copy code
<Register onSuccess={handleSuccess} onError={handleError} />
onSuccess: A callback function that is called when the registration is successful.
onError: A callback function that is called if there is an error during the registration process.
Documentation
For detailed documentation on all features and components provided by OnSign SDK, including advanced configurations and examples, please visit our official documentation.

Support
If you encounter any issues or have questions regarding the OnSign SDK, please file an issue on our GitHub repository or contact our support team.

Contributing
We welcome contributions from the community! If you're interested in improving the OnSign SDK, see our contributing guidelines for more information.

License
OnSign SDK is licensed under the MIT License. See the LICENSE file for more details.

