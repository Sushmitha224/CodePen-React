import React, { useState }  from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { xml } from "@codemirror/lang-xml";
import { css } from "@codemirror/lang-css";
import { oneDark } from "@codemirror/theme-one-dark";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';

export default function Editor(props) {
    const {
        language,
        displayName,
        value,
        onChange
    } = props

    const [open, setOpen] = useState(true)

    const getLanguageExtension = () => {
        switch (language) {
          case "javascript":
            return javascript();
          case "xml":
            return xml();
          case "css":
            return css();
          default:
            return javascript();
        }
      };

    return (
        <div className={`editor-container ${open ? "" : "collapsed"}`}>
      <div className="editor-title">
        <h2>
          <img
            src="https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico"
            alt="Code Editor"
          />
          {displayName}
        </h2>
        <button
          type="button"
          className="expand-collapse-btn"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>

      {open && (
        <CodeMirror
          value={value}
          className="code-mirror-wrapper"
          extensions={[getLanguageExtension()]}
          theme={oneDark}
          onChange={(val) => onChange(val)}
          basicSetup={{
            lineNumbers: true,
            foldGutter: true,
            highlightActiveLine: true,
          }}
        />
      )}
    </div>
    );
}