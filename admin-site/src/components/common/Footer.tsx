export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white mt-auto">
      <div className="container mx-auto p-4 text-center">
        <p className="font-medium">© {new Date().getFullYear()} HealthSync. All rights reserved.</p>
        <p className="text-sm italic">Connecting patient data securely and efficiently.</p>
      </div>
    </footer>
  );
}