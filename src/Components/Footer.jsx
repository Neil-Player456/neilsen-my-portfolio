import React from "react";

const Footer = () => {
    return (
        <footer className="fade-section footer">
            <div className="footer-content">
                <p>Connect with me:</p>
                <div className="footer-links">
                    <a
                        href="https://github.com/Neil-Player456"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="40"
                            height="40"
                            fill="currentColor"
                        >
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.304.762-1.604-2.665-.305-5.467-1.334-5.467-5.933 0-1.31.468-2.382 1.235-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013-.404c1.02.005 2.045.138 3 .404 2.288-1.552 3.293-1.23 3.293-1.23.654 1.653.243 2.873.12 3.176.77.84 1.232 1.912 1.232 3.222 0 4.61-2.807 5.625-5.48 5.922.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                    </a>
                    
                    <a
                        href="https://www.linkedin.com/in/neilsen-morris-4b08b0365/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="40"
                            height="40"
                            fill="currentColor"
                        >
                            <path d="M22.23 0H1.77C.792 0 0 .774 0 1.73v20.54C0 23.226.792 24 1.77 24h20.46C23.208 24 24 23.226 24 22.27V1.73C24 .774 23.208 0 22.23 0zM7.06 20.452H3.545V9h3.515v11.452zM5.302 7.646c-1.128 0-2.043-.922-2.043-2.057 0-1.136.915-2.057 2.043-2.057 1.128 0 2.043.922 2.043 2.057 0 1.135-.915 2.057-2.043 2.057zM20.452 20.452h-3.515v-5.605c0-1.337-.025-3.06-1.865-3.06-1.867 0-2.153 1.46-2.153 2.967v5.698h-3.515V9h3.373v1.561h.047c.47-.888 1.615-1.825 3.322-1.825 3.55 0 4.205 2.338 4.205 5.377v6.339z" />
                        </svg>
                    </a>
                    
                    <a
                        href="https://www.tiktok.com/@edencustomprints_?_r=1&_t=ZT-93CvpnWpGxb"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="40"
                            height="40"
                            fill="currentColor"
                        >
                            <path d="M12.002 0h3.208v12.003a4.8 4.8 0 11-4.798-4.798h.003V0z" />
                        </svg>
                    </a>

                </div>
            </div>
            <p className="footer-copyright">
                &copy; {new Date().getFullYear()} Neilsen
            </p>
        </footer>
    );
};

export default Footer;