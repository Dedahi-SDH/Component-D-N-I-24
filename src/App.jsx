import "./App.css";
import IconBtn from "./components/button/IconBtn";
import MessageBtn from "./components/button/Message";
import PrimaryBtn from "./components/button/Primary";
import SecondaryBtn from "./components/button/Seconday";
import FormComponentsDemo from "./components/Input/form";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <FormComponentsDemo />
      {/* <h1 className="text-3xl font-bold text-gray-800 mb-4">Mon Application</h1>
      <h4 className=" text-black font-bold text-[20px]">
        Primary button type 1
      </h4>
      <PrimaryBtn size="md" full loading={true}>
        Petit et full
      </PrimaryBtn>
      <br />
      <PrimaryBtn size="md">Moyenne</PrimaryBtn>
      <br />
      <PrimaryBtn size="lg" full disabled>
        Grand et full et disabled
      </PrimaryBtn>
      <br />
      <hr />
      <br />
      <SecondaryBtn size="lg">Secondary buttun 1 - disabled</SecondaryBtn>
      <hr />
      <br />
      <MessageBtn />
      <hr />
      <br />
      <IconBtn /> */}
    </div>
  );
}

export default App;
