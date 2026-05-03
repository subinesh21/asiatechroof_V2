import ServiceTemplate from "@/components/ServiceTemplate";
;
export default function LeakRepair() {
  return (
    <ServiceTemplate
      eyebrow="Service · 02"
      title="Expert Solutions for Leak Repairs"
      intro="At Asia Tech Roofing, we take pride in our expertise when it comes to leak repairs. Our dedicated team of professionals has years of experience in identifying and fixing all types of roof leaks. We understand the urgency and potential damage that leaks can cause, which is why we offer swift and effective solutions to protect your home."
      image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000&q=80"
      bullets={[
        "Plumbing repairs for water leaks",
        "Roof repairs for roof leaks",
        "Foundation repairs for basement or crawl space leaks",
        "Pipe repairs for pipe leaks",
      ]}
    />
  );
}
