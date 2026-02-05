(async () => {
  // =========================
  // style を JS で生成
  // =========================
  const style = document.createElement("style");
  style.textContent = `
    body {
      margin: 0;
      background: #1e1e1e;
      color: #d4d4d4;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    }
    pre {
      margin: 0;
      padding: 16px;
      line-height: 1.5;
      white-space: pre;
      tab-size: 2;
      overflow-x: auto;
    }
    a {
      color: #4fc1ff;
      text-decoration: none;
      display: block;
      padding: 10px 16px;
      background: #111;
      border-top: 1px solid #333;
    }
  `;
  document.head.appendChild(style);

  // =========================
  // 表示用 pre を生成
  // =========================
  const pre = document.createElement("pre");
  pre.textContent = "読み込み中…";
  document.body.appendChild(pre);

  // =========================
  // GitHubリンク
  // =========================
  const link = document.createElement("a");
  link.href = "https://github.com/Ryouse1/Suwakkoitiba";
  link.target = "_blank";
  link.textContent = "ソースコード（GitHub）";
  document.body.appendChild(link);

  // =========================
  // 読み込むファイル
  // =========================
  const files = [
    {
      name: "index.html",
      url: "https://raw.githubusercontent.com/Ryouse1/Suwakkoitiba/main/index.html"
    },
    {
      name: "script.js",
      url: "https://raw.githubusercontent.com/Ryouse1/Suwakkoitiba/main/script.js"
    }
  ];

  // =========================
  // fetchして表示
  // =========================
  let output = "";

  for (const file of files) {
    try {
      const res = await fetch(file.url);
      if (!res.ok) throw new Error(res.statusText);
      const text = await res.text();

      output += `/* ===== ${file.name} ===== */\n`;
      output += text + "\n\n";
    } catch (e) {
      output += `/* 読み込みエラー: ${file.name} */\n`;
      output += e.message + "\n\n";
    }
  }

  pre.textContent = output;
})();
