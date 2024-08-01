export default function Services() {
    return (
      <section id="services" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow rounded">
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <p>
                Build modern and responsive websites with the latest web technologies.
              </p>
            </div>
            <div className="p-6 bg-white shadow rounded">
              <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
              <p>
                Create user-friendly and aesthetically pleasing interfaces for web and mobile.
              </p>
            </div>
            <div className="p-6 bg-white shadow rounded">
              <h3 className="text-xl font-semibold mb-4">Consulting</h3>
              <p>
                Get expert advice on web projects and strategies for digital growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  