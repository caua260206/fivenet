export default function Header() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5511984702239&text=Ol%C3%A1,%20FiveNet!%20Gostaria%20de%20falar%20com%20um%20atendente."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 p-3 rounded-full shadow-lg z-[9999] animate-bounce"
    >
      <img
        src="/images/whatsapp.svg"
        alt="WhatsApp"
        className="w-10 h-10 invert"
      />
    </a>
  );
}
