import type { NextPage } from "next";
import Card from "../components/Card";
import alexaLogo from "../public/alexa.png";
import cortanaLogo from "../public/cortana.png";
import siriLogo from "../public/siri.png";
import Banner from "../components/Banner";

const Home: NextPage = () => {
  return (
    <div>
      <Banner />
      <div className="grid text-clip overflow-hidden justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center p-6 mt-5 w-[100%] overflow-hidden">
          <Card
            image={alexaLogo}
            name="Alexa"
            twitter="alexa@twitter"
            description="Alexa was created by Amazon to help you shop for things"
          />
          <Card
            image={cortanaLogo}
            name="Cortana"
            twitter="cortana@twitter"
            description="Cortana was created by Microsoft, who knows what it does"
          />
          <Card
            image={siriLogo}
            name="Siri"
            twitter="siri@twitter"
            description="Siri was made by Apple and is being phased out"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
