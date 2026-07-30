function parseMarkdown(markdown) {
  const blocks = [];
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  let paragraph = [];
  let list = [];

  function flushParagraph() {
    if (paragraph.length) {
      blocks.push({ type: "paragraph", text: paragraph.join(" ") });
      paragraph = [];
    }
  }

  function flushList() {
    if (list.length) {
      blocks.push({ type: "list", items: list });
      list = [];
    }
  }

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      flushList();
      return;
    }

    if (trimmed.startsWith("## ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "heading", text: trimmed.slice(3) });
      return;
    }

    if (trimmed.startsWith("### ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "subheading", text: trimmed.slice(4) });
      return;
    }

    if (trimmed.startsWith("> ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "quote", text: trimmed.slice(2) });
      return;
    }

    if (trimmed.startsWith("- ")) {
      flushParagraph();
      list.push(trimmed.slice(2));
      return;
    }

    flushList();
    paragraph.push(trimmed);
  });

  flushParagraph();
  flushList();

  return blocks;
}

export default function MarkdownContent({ markdown }) {
  const blocks = parseMarkdown(markdown);

  if (!blocks.length) {
    return (
      <div className="border border-white/12 bg-white/[0.025] p-6">
        <p className="text-lg font-semibold text-white">Content file pending.</p>
        <p className="mt-3 text-sm leading-7 text-white/58">
          Add the canonical Markdown body in /content/insights and reference it from
          the Insight metadata record.
        </p>
      </div>
    );
  }

  return (
    <article className="grid max-w-3xl gap-5">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2
              key={`${block.type}-${index}`}
              className="border-t border-white/10 pt-10 text-3xl font-semibold leading-tight tracking-tight text-white first:border-t-0 first:pt-0"
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === "subheading") {
          return (
            <h3
              key={`${block.type}-${index}`}
              className="pt-4 text-xl font-semibold leading-tight text-white"
            >
              {block.text}
            </h3>
          );
        }

        if (block.type === "quote") {
          return (
            <blockquote
              key={`${block.type}-${index}`}
              className="border-l border-aoi-red pl-5 text-base leading-8 text-white/68"
            >
              {block.text}
            </blockquote>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={`${block.type}-${index}`} className="grid gap-3 text-base leading-8 text-white/64">
              {block.items.map((item) => (
                <li key={item} className="border-l border-white/12 pl-4">
                  {item}
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={`${block.type}-${index}`} className="text-base leading-8 text-white/64">
            {block.text}
          </p>
        );
      })}
    </article>
  );
}
