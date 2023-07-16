import React, { useState } from "react";

const Highlighter = () => {
  const [sourceText, setSourceText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(false);

  const handleSourceTextChange = (event) => {
    setSourceText(event.target.value);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCaseSensitiveChange = () => {
    setCaseSensitive(!caseSensitive);
  };

  const highlightText = (text) => {
    if (searchTerm === "") {
      return text;
    }

    const regexFlags = caseSensitive ? "g" : "gi";
    const regex = new RegExp(searchTerm, regexFlags);

    return text.replace(regex, (match) => `<mark>${match}</mark>`);
  };

  const highlightedText = highlightText(sourceText);

  return (
    <>
      <textarea
        data-testid="source-text"
        value={sourceText}
        onChange={handleSourceTextChange}
      />
      <br/>
      <input
        data-testid="search-term"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      <br/>
      case sensitive ?
      <input
        type="checkbox"
        data-testid="case-sensitive"
        checked={caseSensitive}
        onChange={handleCaseSensitiveChange}
      />
      <div
        data-testid="result"
        dangerouslySetInnerHTML={{ __html: highlightedText }}
      ></div>
    </>
  );
};

export default Highlighter;