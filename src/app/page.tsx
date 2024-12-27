import Bannar from "@/components/home/Bannar";
import LogoTicker from "@/components/home/LogoTicker";
import Main from "@/components/home/Main";
import Progress from "@/components/home/Progress";
import { OurWork } from "@/components/home/OurWork";
export default function page() {
  return (
    <div>
      <Bannar />
      <LogoTicker />
      <Main />
      <Progress />
      <OurWork />
    </div>
  );
}
