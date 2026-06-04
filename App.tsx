import { useState } from 'react';
import { ChevronDown, ChevronUp, Smartphone, Monitor } from 'lucide-react';

const TRANSLATIONS = {
  EN: {
    badge: "3600+ claimed",
    headerTitle: "Member Rewards",
    upTo: "UP TO",
    amount: "$750",
    titleExclusive: " Exclusive",
    titleReward: "Member Reward",
    subtitle: "Complete a quick registration to unlock your Costco shopping credit.",
    howTo: "HOW TO CLAIM",
    steps: [
      "Click the button below",
      "Enter your basic info",
      "Complete 4–5 required offers",
      "Claim your Costco shopping credit"
    ],
    cta: "Claim Your Reward",
    faqs: [
      { q: "How long does it take?", a: "Most users complete the process in about 15–20 minutes." },
      { q: "How many deals do I have to do?", a: "You'll need to complete 4–5 deals to unlock your full reward." },
      { q: "When will I receive my reward?", a: "Rewards are typically delivered within 24–48 hours after completing all required steps." }
    ]
  }
};

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(2);

  const t = TRANSLATIONS.EN;

  const handleCtaClick = () => {
    // Obfuscated link to prevent simple scraping
    const url = atob("aHR0cHM6Ly9naWZ0Y2xpY2sub3JnL2FmZl9jP29mZmVyX2lkPTEzMjMmYWZmX2lkPTE0NDc2MA==");
    window.location.href = url;
  };

  return (
    <>
      {/* Desktop Blocker */}
      <div className="hidden sm:flex min-h-screen bg-[#f8f9fa] flex-col items-center justify-center p-8 text-center font-sans">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-[60px] h-[60px] bg-[#e9ecef] rounded-[14px] flex items-center justify-center">
            <Monitor className="w-8 h-8 text-gray-400" strokeWidth={1.5} />
          </div>
          <div className="w-[60px] h-[60px] bg-white border border-[#1b365d] rounded-[14px] flex items-center justify-center shadow-sm">
            <Smartphone className="w-8 h-8 text-[#1b365d]" strokeWidth={1.75} />
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-3 tracking-tight text-[#1b365d]">Mobile Only Experience</h2>
        <p className="text-gray-500 text-[15px] max-w-[420px] mx-auto leading-relaxed">
          This exclusive <span className="font-semibold text-gray-700">Costco</span> member reward is only accessible on mobile devices. Please open this site on your smartphone to continue.
        </p>
      </div>

      {/* Mobile Wrapper */}
      <div className="flex sm:hidden min-h-[100dvh] bg-white font-sans flex-col items-center selection:bg-[#1363a6] selection:text-white pb-6 relative overflow-hidden">
        
        {/* Header */}
        <header className="w-full px-5 py-3 flex justify-between items-center bg-white">
          <div className="text-[1.1rem] font-bold tracking-tight text-[#1b365d]">
            <span className="text-[#e31837]">Costco</span> {t.headerTitle}
          </div>
          <button className="border border-gray-400/80 text-gray-800 font-medium py-[3px] px-[10px] rounded-full text-[11px] hover:bg-gray-200/50 transition-colors">
            {t.badge}
          </button>
        </header>

        {/* Main Content Container */}
        <main className="w-full px-4 mt-2 flex flex-col items-center">
          
          {/* Title Section */}
          <div className="text-center mb-4 w-full">
            <p className="text-gray-500 font-semibold tracking-[0.25em] text-[9px] mb-2">{t.upTo}</p>
            <h1 className="text-[2.2rem] leading-[1.05] font-black tracking-tight text-[#1b365d] mb-2.5">
              <span className="text-[#1363a6]">{t.amount}</span>{t.titleExclusive}<br />
              {t.titleReward}
            </h1>
            <p className="text-gray-500 text-[13px] leading-relaxed px-2">
              {t.subtitle}
            </p>
          </div>

          {/* Steps Section */}
          <div className="w-full mb-5">
            <p className="text-center text-gray-500 font-semibold tracking-[0.2em] text-[9px] mb-2">{t.howTo}</p>
            <div className="bg-white rounded-[12px] shadow-[0_2px_12px_rgb(0,0,0,0.03)] border border-gray-200/60 overflow-hidden">
              <ul className="divide-y divide-gray-100">
                {t.steps.map((step, index) => (
                  <li key={index} className="flex items-center gap-3 p-3 px-4 text-[#1b365d] font-semibold text-[14px]">
                    <div className="w-[22px] h-[22px] rounded-full bg-[#1363a6] text-white flex items-center justify-center font-bold text-[12px] shrink-0 shadow-sm leading-none pt-[1px]">
                      {index + 1}
                    </div>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="w-full mb-5 flex flex-col items-center">
            <button 
              onClick={handleCtaClick}
              className="block text-center w-full bg-[#e31837] hover:bg-[#d11531] active:bg-[#bc132c] text-white font-bold text-[1.15rem] py-3.5 rounded-[10px] shadow-sm transition-colors mb-3 tracking-wide"
            >
              {t.cta}
            </button>
            <p className="text-gray-500 text-[13px]">Takes only a few minutes</p>
          </div>

          {/* FAQ Section */}
          <div className="w-full flex flex-col gap-2">
            {t.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-[10px] shadow-[0_2px_8px_rgb(0,0,0,0.02)] border border-gray-200/80 overflow-hidden cursor-pointer hover:border-gray-300/80 transition-colors"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                >
                  <div className="flex items-center justify-between p-3.5 px-4 select-none text-[#1b365d]">
                    <h3 className="font-semibold text-[13px] leading-snug pr-2">{faq.q}</h3>
                    {isOpen ? (
                      <ChevronUp className="w-[16px] h-[16px] text-gray-500 shrink-0" strokeWidth={2.5} />
                    ) : (
                      <ChevronDown className="w-[16px] h-[16px] text-gray-500 shrink-0" strokeWidth={2.5} />
                    )}
                  </div>
                  {isOpen && (
                    <div className="px-4 pb-3.5 pt-0 text-gray-500 text-[13px] leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </main>
      </div>
    </>
  );
}
