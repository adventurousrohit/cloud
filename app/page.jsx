import DataCenterHero from "@/components/dataCenter/DataCenterHero";
import AboutUsStory from "@/components/dataCenter/AboutUsStory";
import DataCenterCustomerBrands from "@/components/dataCenter/DataCenterCustomerBrands";
import DataCenterServices from "@/components/dataCenter/DataCenterServices";
import DataCenterWhyChoose from "@/components/dataCenter/DataCenterWhyChoose";
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";
import DataCenterBlog from "@/components/dataCenter/DataCenterBlog";
import DataCenterCta from "@/components/dataCenter/DataCenterCta";
import DataCenterServer from "@/components/dataCenter/DataCenterServer";
import SpecificSection from "@/components/dataCenter/SpecificSection";
import DataCenterFeature from "@/components/dataCenter/DataCenterFeature";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <DataCenterHero />
      <DataCenterFeature />
      <SpecificSection />
      <DataCenterServer />
      <DataCenterServices />
      <AboutUsStory />
      <DataCenterWhyChoose />
      <DataHostingDatacenterSupport />
      <DataCenterFeedback />
      <DataCenterCustomerBrands />
      <DataCenterBlog />
      <DataCenterCta />
    </>
  );
}
