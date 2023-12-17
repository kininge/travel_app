// Button.tsx
import React from 'react';

type Language = {
  code: string;
  name: string;
};

type ButtonProps = {
  languages: Language[];
  onSelectLanguage: (code: string) => void;
};

const LanguageSelector: React.FC<ButtonProps> = ({ languages, onSelectLanguage }) => {
  return (
    <div>
      <h3>Select Language:</h3>
      <div>
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => onSelectLanguage(lang.code)}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
