import ServiceTemplate from "@/components/ServiceTemplate";
;
export default function RoofRepair() {
  return (
    <ServiceTemplate
      eyebrow="Service · 01"
      title="Expert Solutions for Roof Repair"
      intro="At Asia Tech Roofing, we take pride in our expertise when it comes to structural works. Our dedicated team of professionals has years of experience in handling various structural projects. We understand the significance of a strong and dependable structure for your building's safety and longevity."
      image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=80"
      bullets={[
        "RC ROOF",
        "ROOF TILE COATING",
        "ROOF TILE REPAIR",
        "METAL ROOFING",
      ]}
    />
  );
}
