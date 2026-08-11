export default function About() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
        padding: "40px 6%",
      }}
    >
      <a
        href="/"
        style={{
          color: "#aaa",
          textDecoration: "none",
        }}
      >
        ← Back to VFY Studio
      </a>

      <section
        style={{
          maxWidth: "800px",
          margin: "120px auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            letterSpacing: "4px",
            color: "#aaa",
            fontSize: "14px",
          }}
        >
          VFY STUDIO
        </p>

        <h1
          style={{
            fontSize: "clamp(48px, 8vw, 80px)",
            margin: "20px 0",
          }}
        >
          ABOUT US
        </h1>

        <p
          style={{
            color: "#aaa",
            fontSize: "18px",
            lineHeight: "1.8",
          }}
        >
          VFY Studio is an independent fashion and design brand creating
          original pieces inspired by individuality, creativity and modern
          culture.
        </p>

        <p
          style={{
            color: "#aaa",
            fontSize: "18px",
            lineHeight: "1.8",
          }}
        >
          We believe what you wear should reflect who you are. Every VFY Studio
          design is created for people who choose to stand out.
        </p>
      </section>
    </main>
  );
}
