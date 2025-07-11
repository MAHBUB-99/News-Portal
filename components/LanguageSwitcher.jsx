"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const languages = [
  {
    code: "en",
    text: "EN",
  },
  {
    code: "bn",
    text: "বাং",
  },
];

export default function LanguageSwitcher({ lang }) {
  const [activeCode, setActiveCode] = useState(lang);
  const router = useRouter();

  const handleChange = (currLang) => {
    setActiveCode(currLang);
    router.push(`/${currLang}`);
  };

  return (
    <div className="flex items-center space-x-2 text-sm">
      {languages.map((language, index) => (
        <div key={index}>
          <button
            onClick={() => handleChange(language.code)}
            className={`px-2 py-1 rounded transition-colors ${
              language.code === activeCode
                ? "bg-black text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {language.text}
          </button>
          {index < languages.length - 1 && (
            <span className="text-gray-400">|</span>
          )}
        </div>
      ))}
    </div>
  );
}
