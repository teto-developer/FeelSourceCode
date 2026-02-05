(() => {
  // ===== body 初期化 =====
  document.body.style.margin = "0";
  document.body.style.width = "100vw";
  document.body.style.height = "100vh";
  document.body.style.background = "#1e1e1e";
  document.body.style.overflow = "auto";
  document.body.style.fontFamily =
    "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";

  // ===== エディタ =====
  const editor = document.createElement("pre");
  editor.contentEditable = "true";
  editor.spellcheck = false;

  editor.style.fontWeight = "200"; // 500〜700で好み調整
  editor.style.margin = "0";
  editor.style.padding = "16px";
  editor.style.width = "100vw";      // ← 横もフル
  editor.style.height = "100vh";     // ← 縦フル
  editor.style.color = "#ffffff";    // ← 完全な白
  editor.style.outline = "none";
  editor.style.whiteSpace = "pre";
  editor.style.lineHeight = "1.5";
  editor.style.boxSizing = "border-box";
  editor.style.fontSize = "16px";// ← ソースビュー感（好みで調整）
  editor.style.overflow = "auto";

  // 初期テキスト
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
