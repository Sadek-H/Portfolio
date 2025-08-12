import { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <ScrollContext.Provider
      value={{ aboutRef, projectsRef, skillsRef, contactRef }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollRefs = () => {
  return useContext(ScrollContext);
};
