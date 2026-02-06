import { LuX } from "react-icons/lu";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}

const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
  return (
    <div
      className={`fixed inset-0 z-9999 flex items-center justify-center px-4 transition-opacity duration-300
        ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      {/* backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300
          ${isOpen ? "opacity-100" : "opacity-0"}`}
      />

      {/* modal */}
      <div
        className={`relative z-10 w-full max-w-lg rounded-2xl bg-white shadow-2xl
          transform transition-all duration-300
          ${isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
      >
        <div className="flex items-center justify-between py-6 px-4 border-b">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <LuX size={18} />
          </button>
        </div>

        <div className="px-5 py-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
