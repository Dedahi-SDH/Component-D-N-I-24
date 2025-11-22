function PrimaryBtn({
  children,
  disabled = false,
  size = "md",
  full = false,
  loading = false,
}) {
  //cette fonction sert a n'afficher le msj ou faire l'action que si le btn et no disabled ou loading!
  function handleClick() {
    if (!isDisabled) alert("Hi from Button");
  }
  //Pour le size
  const sizeClasses = {
    //Petit boutons
    sm: "py-1 px-3 text-sm",
    //Boutons moyen
    md: "py-2.5 px-6 text-base",
    //gros bouton
    lg: "py-3 px-8 text-lg",
  };
  //Pour le largeur du bouton:
  const fullClass = full ? "w-full" : "";
  //SI
  const isDisabled = disabled || loading;
  //Activation/desactivation:
  const disabledClasse = isDisabled
    ? "opacity-50 cursor-not-allowed"
    : "hover:bg-blue-700 active:bg-blue-800";
  return (
    <div>
      <button
        onClick={handleClick}
        disabled={disabled}
        className={`bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-2.5 px-6 rounded-lg shadow-md hover:shadow-lg ${sizeClasses[size]} ${fullClass} ${disabledClasse}`}
      >
        {loading ? "Loading...." : children}
      </button>
    </div>
  );
}

export default PrimaryBtn;
