const MenuButton = ({ name, Icon, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="flex gap-3 items-center text-xl hover:bg-borderColor py-2 px-4 rounded-lg w-full capitalize"
      >
        <Icon />
        {name}
      </button>
    );
  };
  
  export default MenuButton;