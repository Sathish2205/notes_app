import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 mt-10">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="text-yellow-400 font-semibold">MyNotes</span>. All rights reserved.
        </p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a
            href="https://github.com/Sathish2205/notes_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sathish-saravanan-63b615316/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors"
          >
            LinkedIn
          </a>
          <a

          
            href={`https://mail.google.com/mail/u/0/?fs=1&to=sathishsaravanan2205@gmail.com&su=Hello+from+MyNotes&body=Hi,+I+wanted+to+reach+out...%22#inbox`}
            className="hover:text-yellow-400 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};
