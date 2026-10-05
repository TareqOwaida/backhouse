import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Google Fonts serves WOFF or TTF (both readable by Satori) to user agents
   without woff2 support. Falls back to the default face if the fetch fails. */
async function loadFraunces() {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400&display=swap",
      { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:20.0) Gecko/20100101 Firefox/20.0" } },
    ).then((r) => r.text());
    const url = css.match(/src: url\(([^)]+)\) format\('(?:truetype|opentype|woff)'\)/)?.[1];
    if (!url) return null;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OpenGraphImage() {
  const fraunces = await loadFraunces();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#f5f1e8",
          color: "#16140f",
          fontFamily: fraunces ? "Fraunces" : "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 4,
              background: "#16140f",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 6,
              padding: "0 9px",
            }}
          >
            <div style={{ height: 2.5, background: "#f5f1e8" }} />
            <div style={{ height: 2.5, width: "70%", background: "#f5f1e8" }} />
            <div style={{ height: 2.5, background: "#f5f1e8" }} />
          </div>
          <div style={{ fontSize: 36, letterSpacing: -0.5 }}>{site.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontSize: 88, lineHeight: 0.98, letterSpacing: -3, maxWidth: 1000 }}>
            Restaurant books, closed by the 10th.
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              borderTop: "2px solid #16140f",
              paddingTop: 24,
              fontSize: 26,
              color: "#4d4840",
            }}
          >
            <div>Bookkeeping, payroll and sales tax for independent restaurants.</div>
            <div style={{ color: "#1e5a3f" }}>backhouse.co</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fraunces
        ? [{ name: "Fraunces", data: fraunces, style: "normal", weight: 400 }]
        : undefined,
    },
  );
}
