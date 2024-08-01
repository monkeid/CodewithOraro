export default function Contact() {
    return (
      <section id="contact" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded"
                placeholder="Your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                className="w-full px-4 py-2 border rounded"
                rows={4}
                placeholder="Your message"
              ></textarea>
            </div>
            <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
  