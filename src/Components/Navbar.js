export const Navbar = ({handleAdd}) => {
  return (
    <nav class="relative flex w-full flex-wrap items-center justify-between bg-neutral-100 py-3 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700">
      <div class="flex w-full flex-wrap items-center justify-between px-6">
        <div>
          <a
            class="text-xl font-semibold text-neutral-800"
            href="#"
          >
            Smart Home
          </a>
        </div>
        
        <div onClick={handleAdd} className="hover:bg-gray-200 rounded-3xl flex items-center justify-center w-8 h-8 text-neutral-800 text-2xl cursor-pointer">
          +
        </div>
      </div>
    </nav>
  );
};
