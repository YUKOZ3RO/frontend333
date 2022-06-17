import { Layout } from "../Layout/Layout";

import { Pillar } from "./pillar";
import { SocialButton } from "./socialButton";


export function HomePage() {
  return (
    <div>
<Layout showAnimation={true}>
       <div className="row flex-m-col flex-d-row">
         <Pillar
           heading="Who We Are"
           columnNumber={1}
           body="We are a HipHop/RnB Alternative Trap Record Label based in South Africa founded in 2021 and aimed at youth empowerment in the entertainment industry."
         ></Pillar>
         <Pillar
           columnNumber={2}
           heading="Mission"
           body="Our mission is to discover and seek out undiscovered talented young artists and provide them with the platform to prosper, nurtured by an environment of freedom and creativity."
         ></Pillar>
         <Pillar
           columnNumber={3}
           heading="Values"
           body="Transparency, Integrity and Quality."
         />
       </div>
       <div className="links">
         <SocialButton
           href="https://www.instagram.com/3rdharmonicrecords"
           socialNetworkType="instagram"
           text="3RD HARMONIC RECORDS"
         />
         <SocialButton
           href="https://www.instagram.com/dropoutfactory"
           socialNetworkType="instagram"
           text="DROP OUT FACTORY:"
         />
         <SocialButton
           href="https://www.instagram.com/r_meo7230/"
           socialNetworkType="instagram"
           text="LIL ROLEY"
         />
         <SocialButton
           href="https://www.instagram.com/iamhat3trick"
           socialNetworkType="instagram"
           text="HAT3TRICK"
         />
       </div>
       <div className="links">
         <SocialButton
           href="https://twitter.com/the3rdharmonic"
           socialNetworkType="twitter"
           text="3RD HARMONIC RECORDS"
         />
         <SocialButton
           href="https://twitter.com/dofbfg"
           socialNetworkType="twitter"
           text="DROP OUT FACTORY"
         />
         <SocialButton
           href="https://twitter.com/hat3trick"
           socialNetworkType="twitter"
           text="HAT3TRICK"
         />
       </div>
   </Layout>
</div>
)};