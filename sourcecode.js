(() => {
  document.body.style.margin = "0";
  document.body.style.width = "100vw";
  document.body.style.height = "100vh";
  document.body.style.background = "#1e1e1e";
  document.body.style.overflow = "hidden";
  document.body.style.fontFamily =
    "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";

  // ===== エディタ =====
  const editor = document.createElement("pre");
  editor.contentEditable = "true";
  editor.spellcheck = false;

  editor.style.margin = "0";
  editor.style.padding = "16px";
  editor.style.width = "100%";
  editor.style.height = "100%";
  editor.style.color = "#ffffff";
  editor.style.outline = "none";
  editor.style.whiteSpace = "pre-wrap";
  editor.style.wordBreak = "break-word";
  editor.style.lineHeight = "1.5";
  editor.style.boxSizing = "border-box";
  editor.style.overflowY = "auto";

  // ===== 画面サイズに応じてフォント調整 =====
  function resizeEditor() {
    const w = window.innerWidth;

    // 文字サイズを画面幅ベースで計算（スマホでも読みやすく）
    let fontSize = Math.max(12, Math.min(18, w / 80));
    editor.style.fontSize = fontSize + "px";

    // 行の横幅を安定させるために maxWidth を設定
    editor.style.maxWidth = "100vw";
  }

  window.addEventListener("resize", resizeEditor);
  resizeEditor();

  editor.textContent =
`// 自由に文字を書ける
// これは JS だけで動くエディタ
// 保存もUIもなし、打つだけ
`;

  editor.addEventListener("keydown", e => {
    if (e.key === "Tab") {
      e.preventDefault();
      document.execCommand("insertText", false, "  ");
    }
  });

  document.body.appendChild(editor);
  editor.focus();
})();
