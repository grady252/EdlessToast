# EdlessToast 🍞
A customizable toast for react.

This was mostly used as a project for me to learn from and is not heavily maintained.

## Install
Installable through:

### npm
```bash
npm i edlesstoast
```

### yarn
```bash
yarn add edlesstoast
```

## Usage

App should be wrapped in a `ToastProvider`, child components will then have access to the `useToast` hook. There is a default toast element included.

```jsx
import { ToastProvider, useToast } from 'edlesstoast';

const SomeComponent = () => {
    const { openToast, closeToast } = useToast();

    const openHandler = () => openToast({ 
        color: '#5cb85c', // Green Color
        text: 'This is a toast!' 
    });

    const closeHandler = () => clostToast();

    return (
        <button onClick={openHandler}>
            Open Toast
        </button>
        <button onClick={clostHandler}>
            Close Toast
        </button>
    );
}

const App = () => {
    <ToastProvider>
        <SomeComponent />
    </ToastProvider>
}

```

## ToastProvider
Props:

| Prop                      | Description                                       |
|---------------------------|---------------------------------------------------|
| children `ReactNode`      | Children of the ToastProvider.                    |
| toastElement `JSX Element`| Your custom toast element.                        |
| toastVisableTime `number` | The time in ms that your toast is visable.        |
| toastFadeTime `number`    | The time of the fade animation for your toast.    |

## useToast
The `useToast` hook is used like:

```jsx
const { openToast, closeToast } = useToast();
```

The `openToast` method will open a toast, and takes one argument `options` which are the props that should be passed to your toast element.

The `clostToast` method will close an open toast.
