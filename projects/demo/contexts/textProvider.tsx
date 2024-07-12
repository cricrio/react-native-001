import { createContext, useContext, useState } from 'react';

export const TextsContext = createContext<{
  texts: string[];
  onAdd: (text: string) => void;
}>({
  texts: [],
  onAdd: (text: string) => {},
});

export const useTexts = () => {
  const { texts, onAdd } = useContext(TextsContext);
  return [texts, onAdd];
};

export const TextsProvider = ({
  initialTexts = [],
  children,
}: {
  initialTexts: string[];
  children: any;
}) => {
  const [texts, setTexts] = useState<string[]>(initialTexts);
  const onAdd = (text: string) => setTexts((t) => [text, ...t]);
  return (
    <TextsContext.Provider
      value={{
        texts,
        onAdd,
      }}
    >
      {children}
    </TextsContext.Provider>
  );
};
