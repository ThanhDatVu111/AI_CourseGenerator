import { createContext } from "react";

export const UserInputContext = createContext();

// Purpose of createContext()
// createContext() sets up a Context object that includes two main parts:

// A Provider (<Context.Provider>) to store and manage shared state, and
// A Consumer (via the useContext hook) to access that shared state.
// With createContext(), you can:

// Define a shared data source: It provides a way to define and hold values (such as state or functions) that you want multiple components to access.
// Provide values to multiple components: Using the Provider component created from createContext, you can wrap parts of your component tree to make the shared data accessible to any component within the tree.