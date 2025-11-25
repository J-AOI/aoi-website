export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/5">
      <div className="bg-gradient-to-r from-[#0a2540] via-[#0b3a5a] to-[#0a2540]">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/90">
            Interested in joining the Early Access Council or exploring partnership?
          </div>
          <a
            href="mailto:justin@aointegrity.ai"
            className="text-white font-semibold tracking-wide"
          >
            justin@aointegrity.ai
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-white/50">
        © AoI Meta Governance Platform 2025
      </div>
    </footer>
  );
}
