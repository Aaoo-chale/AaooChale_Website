import React from "react";
import Card from "../../component/card/Card";
import ComponentCard from "../../component/componentcard/ComponentCard";
import ComponentDiscription from "../../component/componentdiscription/ComponentDiscription";
import Content from "../../component/content/Content";
import Context from "../../component/context-text/Context";
import Main from "../../component/main/Main";
import Navbar from "../../component/navbar/Navbar";
import Text from "../../component/text/Text";
import ProfileCard from "../../component/profilecard/ProfileCard";
import HeaderFooter from "../../component/headerfooter/HeaderFooter";
import LooterFooter from "../../component/lowerfooter/LooterFooter";

const Home = () => {
  return (
    <div>
      <Navbar bg='aliceblue'/>
      <Content />
      <Text />
      <Card />
      <Main />
      <ComponentCard />
      <ComponentDiscription />
      <Context />
      <ProfileCard />
      <HeaderFooter />
      <LooterFooter mT="-8%" ht="100vh" />
    </div>
  );
};

export default Home;
