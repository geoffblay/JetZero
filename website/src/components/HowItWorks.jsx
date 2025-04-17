export default function HowItWorks() {
    const steps = [
      {
        emoji: "✈️",
        title: "Book a Flight",
        desc: "JetZero detects your flight details as you browse.",
      },
      {
        emoji: "🌱",
        title: "Estimate CO₂",
        desc: "We calculate your emissions and suggest a carbon offset.",
      },
      {
        emoji: "📄",
        title: "Offset & Track",
        desc: "Donate to verified projects and get tax-deductible receipts.",
      },
    ];
  
    return (
      <section className="max-w-4xl mx-auto py-16 px-6" id="how-it-works">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {steps.map(({ emoji, title, desc }) => (
            <div key={title}>
              <div className="text-5xl mb-4">{emoji}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  