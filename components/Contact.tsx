export default function Contact() {
  return (
    <form
      name="contact"
      method="POST"
      netlify-honeypot="bot-field"
      data-netlify="true"
      // data-netlify-recaptcha="true"
    >
      <div className="mx-auto w-full flex flex-col space-y-4 md:items-center md:w-4/5">
        <span className="col-span-2 flex self-start items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-indigo-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <h2 className="self-start text-lg font-bold text-indigo-900">
            Contact Me
          </h2>
        </span>
        <input type="hidden" name="form" value="contact" />
        <label className="hidden">
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
        <input
          className="w-full p-2 border-2 rounded-md focus:outline-none focus:border-indigo-900"
          autoComplete="off"
          placeholder="Name*"
          name="name"
          required
        />
        <input
          className="w-full p-2 border-2 rounded-md focus:outline-none focus:border-indigo-900"
          autoComplete="off"
          type="email"
          name="email"
          placeholder="Email*"
          required
        />
        <textarea
          className="w-full resize-none p-2 border-2 rounded-md focus:outline-none focus:border-indigo-900"
          autoComplete="off"
          name="message"
          placeholder="Message*"
          rows={5}
          required
        ></textarea>

        <button
          className="btn btn-primary inline-block self-end uppercase mt-4"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
