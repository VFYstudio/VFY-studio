export default function Contact() {
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
      {/* BACK TO HOME */}
      <a
        href="/"
        style={{
          color: "#aaa",
          textDecoration: "none",
          fontSize: "15px",
        }}
      >
        ← Back to VFY Studio
      </a>

      {/* CONTACT CONTENT */}
      <section
        style={{
          maxWidth: "900px",
          margin: "100px auto",
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
            letterSpacing: "-2px",
          }}
        >
          CONTACT US
        </h1>

        <p
          style={{
            maxWidth: "650px",
            margin: "0 auto",
            color: "#aaa",
            fontSize: "18px",
            lineHeight: "1.8",
          }}
        >
          Have a question about an order, product, shipping or returns?
          We are here to help.
        </p>

        {/* SUPPORT CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginTop: "60px",
          }}
        >
          <div
            style={{
              border: "1px solid #292929",
              borderRadius: "6px",
              padding: "35px 20px",
            }}
          >
            <h2>Customer Support</h2>

            <p
              style={{
                color: "#999",
                lineHeight: "1.7",
              }}
            >
              Need help with your order or have a question about our
              products? Our support team is here to help.
            </p>
          </div>

          <div
            style={{
              border: "1px solid #292929",
              borderRadius: "6px",
              padding: "35px 20px",
            }}
          >
            <h2>Order Support</h2>

            <p
              style={{
                color: "#999",
                lineHeight: "1.7",
              }}
            >
              Questions about shipping, delivery, returns or your order?
              Contact us and we will assist you.
            </p>
          </div>

          <div
            style={{
              border: "1px solid #292929",
              borderRadius: "6px",
              padding: "35px 20px",
            }}
          >
            <h2>General Inquiries</h2>

            <p
              style={{
                color: "#999",
                lineHeight: "1.7",
              }}
            >
              For general questions about VFY Studio, products or
              collaborations, feel free to reach out.
            </p>
          </div>
        </div>

        {/* RESPONSE TIME */}
        <div
          style={{
            marginTop: "70px",
            padding: "35px 20px",
            borderTop: "1px solid #222",
            borderBottom: "1px solid #222",
          }}
        >
          <h2>We're Here to Help</h2>

          <p
            style={{
              color: "#999",
              lineHeight: "1.8",
            }}
          >
            Our support team aims to respond to customer inquiries within
            24–48 hours.
          </p>
        </div>

        {/* SOCIAL */}
        <div style={{ marginTop: "60px" }}>
          <h2>Follow VFY Studio</h2>

          <p style={{ color: "#999" }}>
            Stay connected and discover our latest designs.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "25px",
              marginTop: "25px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#"
              style={{
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Instagram
            </a>

            <a
              href="#"
              style={{
                color: "#fff",
                textDecoration: "none",
              }}
            >
              TikTok
            </a>

            <a
              href="#"
              style={{
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Facebook
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
