(() => {
  document.body.style.margin = "0";
  document.body.style.width = "100vw";
  document.body.style.height = "100vh";
  document.body.style.background = "#1e1e1e";
  document.body.style.overflow = "hidden";

  // ===== エディタ =====
  const editor = document.createElement("pre");
  editor.contentEditable = "true";
  editor.spellcheck = false;

  Object.assign(editor.style, {
    margin: "0",
    padding: "16px",
    width: "100%",
    height: "100%",
    color: "#ffffff",
    outline: "none",
    boxSizing: "border-box",
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
    overflowY: "auto",

    fontFamily:
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
  });

  // ===== 文字サイズを画面サイズに合わせる =====
  function resizeEditor() {
    const w = window.innerWidth;

    // スマホでもPCでも自然なサイズ
    const fontSize = Math.max(12, Math.min(18, w / 75));
    editor.style.fontSize = fontSize + "px";

    // 横幅制限（読みやすさ重視）
    editor.style.maxWidth = "100vw";
  }

  window.addEventListener("resize", resizeEditor);
  resizeEditor();

  // ===== 初期テキスト =====
  editor.textContent = `// Code Editor
// Type freely
// Supports mobile resize
`;

  // ===== Tab入力対応 =====
  editor.addEventListener("keydown", e => {
    if (e.key === "Tab") {
      e.preventDefault();
      document.execCommand("insertText", false, "  ");
    }
  });

  document.body.appendChild(editor);
  editor.focus();
})();
