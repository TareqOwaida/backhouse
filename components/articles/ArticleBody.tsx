import type { ArticleBlock } from "@/types";
import { cn } from "@/lib/utils";

type ArticleBodyProps = {
  blocks: ArticleBlock[];
  className?: string;
};

export function ArticleBody({ blocks, className }: ArticleBodyProps) {
  return (
    <div className={cn("prose-editorial", className)}>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading":
            return <h2 key={index}>{block.text}</h2>;
          case "quote":
            return (
              <blockquote key={index}>
                <p>{block.text}</p>
              </blockquote>
            );
          case "list": {
            const Tag = block.ordered ? "ol" : "ul";
            return (
              <Tag key={index}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </Tag>
            );
          }
          default:
            return <p key={index}>{block.text}</p>;
        }
      })}
    </div>
  );
}
