# ABOUT THE PROJECT

Small project to with the intention of learning to create a Modal and a Sidebar with react.

The main goal was to practice with the Context API, instead of prop drilling.

## HOW IT WAS MADE

The first step was to create the context. In this particular case, two states where utilized.
One to toggle the Sidebar Component and one to toggle the Modal Component.

In addition to passing as a value, functions to toggle them were passed as well.

```js
const [isModalOpen, setIsModalOpen] = useState(false);
const [isSidebarOpen, setIsSidebarOpen] = useState(false);

const openModal = () => setIsModalOpen(true);
const closeModal = () => setIsModalOpen(false);

const openSidebar = () => setIsSidebarOpen(true);
const closeSidebar = () => setIsSidebarOpen(false);

const valuesToPass = {
  isModalOpen,
  isSidebarOpen,
  openModal,
  closeModal,
  openSidebar,
  closeSidebar,
};
```

This is a short example of what was added to the global context that was created.

## COMPONENTS

The project consists of three main components:

- Home.jsx
- Sidebar.jsx
- Modal.jsx

All the data that is mapped in the screen comes from these components. For example the information created in the context is passed here.

For example:

```js
import { useGlobalContext } from "../context/context";

const Home = () => {
  const { openModal, openSidebar } = useGlobalContext();
};
```

This allows the context created to be used in any component without the need of passing it through props.

## CSS

This is were the majority of the logic lies. For the modal, it is hidden, while the sidebar is translated out of the screen.
To make it live, classes are implemented conditionally in each component (Sidebar, Modal).
