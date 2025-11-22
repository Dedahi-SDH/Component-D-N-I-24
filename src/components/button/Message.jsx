function MessageBtn() {
  function handleCLick() {
    alert("Vous avez deux meesages");
  }
  return (
    <button
      type="button"
      onClick={handleCLick}
      class="inline-flex items-center rounded text-white bg-blue-500 hover:bg-blue-700 box-border border border-transparent  shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none"
    >
      Messages
      <span class="inline-flex items-center justify-center w-4.5 h-4.5 ms-2 text-xs font-medium text-fg-brand-strong bg-brand-soft rounded-full dark:text-fg-brand-subtle">
        2
      </span>
    </button>
  );
}
export default MessageBtn;
