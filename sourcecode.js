(() => {
  // ===== body 初期化 =====
  document.documentElement.style.height = "100%";
  document.body.style.margin = "0";
  document.body.style.height = "100%";
  document.body.style.background = "#1e1e1e";
  document.body.style.overflow = "hidden";
  document.body.style.fontFamily =
    "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";

  // ===== エディタ（重要：div）=====
  const editor = document.createElement("div");
  editor.contentEditable = "true";
  editor.spellcheck = false;

  // 見た目
  editor.style.margin = "0";
  editor.style.padding = "16px";
  editor.style.width = "100vw";
  editor.style.height = "100vh";
  editor.style.boxSizing = "border-box";

  editor.style.background = "#1e1e1e";
  editor.style.color = "#ffffff";     // 完全な白
  editor.style.whiteSpace = "pre";    // pre相当
  editor.style.outline = "none";
  editor.style.lineHeight = "1.5";

  // ★ size がちゃんと変わる
  editor.style.fontSize = "17px";
  editor.style.fontWeight = "200";

  // スクロール
  editor.style.overflow = "auto";

  // 初期テキスト
  editor.textContent =
`// 自由に文字を書ける
// font-size は確実に反映される
// pre じゃないのがポイント
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
  editor.focus();
})();
