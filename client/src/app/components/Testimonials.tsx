export default function Testimonials() {
    return (
      <section id="testimonials" className="bg-gray-100 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white shadow rounded">
              <p>
                "Code with Antonio helped me level up my web development skills. The
                tutorials are easy to follow and packed with valuable information."
              </p>
              <p className="mt-4 font-semibold">- Jane Doe</p>
            </div>
            <div className="p-6 bg-white shadow rounded">
              <p>
                "The resources provided by Code with Antonio have been instrumental in
                my career as a developer. Highly recommend!"
              </p>
              <p className="mt-4 font-semibold">- John Smith</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  