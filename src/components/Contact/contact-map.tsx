export function ContactMap() {
  return (
    <section className="w-full h-[450px] bg-zinc-100 grayscale hover:grayscale-0 transition-all duration-700">
      <iframe 
        src="https://maps.google.com/maps?q=Shewrapara,Mirpur,Dhaka&t=&z=15&ie=UTF8&iwloc=&output=embed" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen={true} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Gym Location"
      ></iframe>
    </section>
  );
}
