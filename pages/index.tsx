import type { NextPage } from "next";
import Card from "../components/Card";
import alexaLogo from "../public/alexa.png";
import cortanaLogo from "../public/cortana.png";
import siriLogo from "../public/siri.png";

const Home: NextPage = () => {
  return (
    <div className="grid text-clip overflow-hidden justify-center">
      <div className="grid grid-cols-3 gap-5 justify-center p-6 mt-5 text-center w-[100%] overflow-hidden">
        <Card
          image={alexaLogo}
          name="Alexa"
          twitter="alexa@twitter"
          description="Hi I am alexa"
        />
        <Card
          image={cortanaLogo}
          name="Cortana"
          twitter="cortana@twitter"
          description="Hi I am cortana"
        />
        <Card
          image={siriLogo}
          name="Siri"
          twitter="siri@twitter"
          description="Hi I am Siri"
        />
      </div>
    </div>
  );
};

export default Home;
