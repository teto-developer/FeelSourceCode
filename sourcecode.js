(() => {
  // ===== body 初期化 =====
  document.body.style.margin = "0";
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
  editor.style.height = "100vh";
  editor.style.color = "#d4d4d4";
  editor.style.outline = "none";
  editor.style.whiteSpace = "pre";
  editor.style.lineHeight = "1.5";
  editor.style.boxSizing = "border-box";

  // 初期テキスト（任意）
  editor.textContent =
`// 自由に文字を書ける
// これは JS だけで動くエディタ
// 保存もUIもなし、打つだけ
`;

  // ===== Tabキー対応 =====
  editor.addEventListener("keydown", e => {
    if (e.key === "Tab") {
      e.preventDefault();
      document.execCommand("insertText", false, "  ");
    }
  });

  // ===== 追加 =====
  document.body.appendChild(editor);

  // 自動フォーカス
  editor.focus();
})();
