export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 6%",
          borderBottom: "1px solid #222",
        }}
      >
        <h2 style={{ margin: 0, letterSpacing: "2px" }}>VFY STUDIO</h2>

        <nav style={{ display: "flex", gap: "24px" }}>
          <a href="#shop" style={{ color: "#fff", textDecoration: "none" }}>
            Shop
          </a>
          <a href="#about" style={{ color: "#fff", textDecoration: "none" }}>
            About
          </a>
          <a href="#contact" style={{ color: "#fff", textDecoration: "none" }}>
            Contact
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        style={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px 20px",
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
            fontSize: "clamp(48px, 10vw, 100px)",
            margin: "10px 0",
            letterSpacing: "-3px",
          }}
        >
          WEAR WHAT
          <br />
          DEFINES YOU.
        </h1>

        <p
          style={{
            maxWidth: "600px",
            color: "#aaa",
            fontSize: "18px",
            lineHeight: "1.6",
          }}
        >
          Original designs for people who choose to stand out.
        </p>

        <a
          href="#shop"
          style={{
            marginTop: "30px",
            padding: "16px 34px",
            background: "#fff",
            color: "#000",
            textDecoration: "none",
            fontWeight: "bold",
            borderRadius: "4px",
          }}
        >
          SHOP NOW
        </a>
      </section>

      {/* SHOP */}
      <section
        id="shop"
        style={{
          padding: "80px 6%",
          borderTop: "1px solid #222",
        }}
      >
        <h2 style={{ fontSize: "36px" }}>Featured Collection</h2>

        <p style={{ color: "#999" }}>
          Discover the latest VFY Studio designs.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          {["New Drop", "Best Sellers", "Hoodies", "T-Shirts"].map((item) => (
            <div
              key={item}
              style={{
                border: "1px solid #292929",
                padding: "50px 20px",
                textAlign: "center",
                borderRadius: "6px",
              }}
            >
              <h3>{item}</h3>
              <p style={{ color: "#888" }}>Explore collection →</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{
          padding: "100px 6%",
          textAlign: "center",
          borderTop: "1px solid #222",
        }}
      >
        <h2 style={{ fontSize: "36px" }}>About VFY Studio</h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "20px auto",
            color: "#aaa",
            lineHeight: "1.8",
          }}
        >
          VFY Studio is an independent fashion and design brand creating
          original pieces inspired by individuality, creativity and modern
          culture.
        </p>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        style={{
          padding: "40px 6%",
          borderTop: "1px solid #222",
          textAlign: "center",
          color: "#777",
        }}
      >
        <p>VFY Studio</p>
        <p>Wear What Defines You.</p>
        <p>© 2026 VFY Studio. All rights reserved.</p>
      </footer>
    </main>
  );
}
