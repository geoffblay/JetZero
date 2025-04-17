import Button from "./Button"

export default function CTASection() {
  return (
    <section className="text-center py-16 bg-blue-50" id="get-started">
      <h2 className="text-2xl font-semibold mb-4">Ready to Offset Your Next Flight?</h2>
      <p className="text-gray-700 mb-6">
        Install the Chrome Extension and start flying cleaner.
      </p>
      <Button href="#" variant="blue">
        Add to Chrome
      </Button>
    </section>
  );
}
