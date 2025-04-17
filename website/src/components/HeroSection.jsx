import Button from "./Button"
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="text-center py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
      <h1 className="text-5xl font-bold mb-4">JetZero</h1>
      <p className="text-xl text-gray-700 mb-8">
        Offset your flight’s carbon emissions — automatically.
      </p>
      <Button to="/signup" variant="green">
        Get Started
      </Button>
    </section>
  );
}
