import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDetails: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] =
    useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        projectDetails: '',
        message: '',
      });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-16">
      {/* HERO */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Get in{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's build intelligent solutions together
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Let's Start a Conversation</h2>
            <p className="text-gray-600 mb-8">
              Share your project details and let’s bring your vision to life.
            </p>

            <div className="space-y-6">
              <Info icon={<Mail />} title="Email Us" value="contact@devunite.com" />
              <Info icon={<Phone />} title="Call Us" value="+1 (555) 123-4567" />
              <Info
                icon={<MapPin />}
                title="Visit Us"
                value="Innovation Hub, San Francisco, CA"
              />
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg">
                Thank you! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input label="Your Name" name="name" value={formData.name} onChange={handleChange} />
              <Input label="Email Address" name="email" value={formData.email} onChange={handleChange} />
              <Input
                label="Project Details"
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
              />

              <div>
                <label className="block font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg flex justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : <>Send Message <Send size={18} /></>}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

/* Helper components */
function Info({ icon, title, value }: any) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-gray-600">{value}</p>
      </div>
    </div>
  );
}

function Input({ label, name, value, onChange }: any) {
  return (
    <div>
      <label className="block font-semibold mb-2">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full border rounded-lg p-3"
      />
    </div>
  );
}
