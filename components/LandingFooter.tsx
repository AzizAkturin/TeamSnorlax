export default function LandingFooter() {
  return (
    <footer className="border-t border-gray-100 px-8 py-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-lg font-bold text-gray-900">Meridian</span>
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
          <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
          <a href="#" className="hover:text-gray-600 transition-colors">Security</a>
          <a href="#" className="hover:text-gray-600 transition-colors">Status</a>
        </div>
        <span className="text-sm text-gray-400">© 2026 Meridian, Inc.</span>
      </div>
    </footer>
  );
}
