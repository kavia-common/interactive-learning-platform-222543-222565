import React, { useEffect } from 'react';
import './AppPageLocal.css';

// PUBLIC_INTERFACE
export default function LoginPage() {
  /**
   * This component renders the static login page translated into JSX and wires up
   * behaviors (password toggle and simple validation) in a scoped, React-friendly way.
   * It relies on CSS assets located under /assets/ paths (served by CRA public root).
   */

  useEffect(() => {
    // Scoped behavior equivalent to assets/login-page-design-1-1-110.js
    const passwordInput = document.getElementById('password-input');
    const toggleBtn = document.getElementById('el-1-141');
    const form = document.getElementById('el-1-114');
    const emailInput = document.getElementById('email-input');
    const errorRegion = document.getElementById('form-errors');

    function handleToggle() {
      if (!passwordInput || !toggleBtn) return;
      const isPassword = passwordInput.getAttribute('type') === 'password';
      passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
      toggleBtn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
    }

    function handleSubmit(e) {
      if (!(form && errorRegion && emailInput && passwordInput)) return;
      const messages = [];
      if (!emailInput.value || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailInput.value)) {
        messages.push('Please enter a valid email address.');
      }
      if (!passwordInput.value) {
        messages.push('Please enter your password.');
      }
      if (messages.length) {
        e.preventDefault();
        errorRegion.classList.remove('sr-only');
        errorRegion.textContent = messages.join(' ');
        (emailInput.value ? passwordInput : emailInput).focus();
      } else {
        errorRegion.textContent = '';
        errorRegion.classList.add('sr-only');
      }
    }

    if (toggleBtn) toggleBtn.addEventListener('click', handleToggle);
    if (form) form.addEventListener('submit', handleSubmit);

    // Prevent image dragging (from assets/app.js)
    const imgs = Array.from(document.querySelectorAll('img'));
    imgs.forEach((img) => img.setAttribute('draggable', 'false'));

    return () => {
      if (toggleBtn) toggleBtn.removeEventListener('click', handleToggle);
      if (form) form.removeEventListener('submit', handleSubmit);
    };
  }, []);

  // Import CSS assets globally by injecting link tags for this route only.
  // CRA serves public files at /, so /assets/... is accessible.
  useEffect(() => {
    const css1 = document.createElement('link');
    css1.rel = 'stylesheet';
    css1.href = '/assets/common.css';
    const css2 = document.createElement('link');
    css2.rel = 'stylesheet';
    css2.href = '/assets/login-page-design-1-1-110.css';
    document.head.appendChild(css1);
    document.head.appendChild(css2);

    return () => {
      document.head.removeChild(css1);
      document.head.removeChild(css2);
    };
  }, []);

  return (
    <main id="main-content" className="container-max" role="main" tabIndex={-1}>
      <div className="screen-root" id="screen-1-110" aria-label="Login page">
        <section id="el-1-112" aria-label="Login card">
          <div id="el-1-113" role="presentation" aria-hidden="true"></div>

          <form id="el-1-114" aria-describedby="form-instructions" noValidate>
            <div id="el-1-115" className="text-typo-11" aria-hidden="false">Your logo</div>
            <h1 id="el-1-116" className="text-typo-12">Login</h1>

            <p id="form-instructions" className="sr-only">Enter your email and password to sign in.</p>

            <label id="el-1-117" className="text-typo-13" htmlFor="email-input">Email</label>
            <div id="el-1-118" role="presentation" aria-hidden="true"></div>
            <input
              id="email-input"
              name="email"
              type="email"
              className="a11y-field email-field"
              aria-required="true"
              autoComplete="email"
              placeholder="username@gmail.com"
              aria-describedby="email-hint"
            />
            <span id="email-hint" className="sr-only">Use a valid email format such as name@example.com</span>

            <label id="el-1-120" className="text-typo-13" htmlFor="password-input">Password</label>
            <div id="el-1-119" role="presentation" aria-hidden="true"></div>
            <input
              id="password-input"
              name="password"
              type="password"
              className="a11y-field password-field"
              aria-required="true"
              autoComplete="current-password"
              placeholder="Password"
            />

            <button
              id="el-1-141"
              className="btn-icon toggle-password"
              type="button"
              aria-controls="password-input"
              aria-label="Show password"
            >
              <img
                src="/assets/figmaimages/figma_image_1_144.svg"
                alt=""
                role="presentation"
                width="16"
                height="16"
                style={{ position: 'absolute', left: '1.0577px', top: '1.9066px', width: '13.4222px', height: '12.2222px' }}
              />
            </button>

            <a id="el-1-129" className="text-typo-16" href="#" role="link">Forgot Password?</a>

            <div id="el-1-130" role="presentation" aria-hidden="true"></div>
            <button id="el-1-131" className="text-typo-17 btn-primary" type="submit">Sign in</button>

            <div id="el-1-126" className="text-typo-13" aria-hidden="false">or continue with</div>

            <button id="el-1-121" className="social-btn" type="button" aria-label="Continue with Google"></button>
            <button id="el-1-122" className="social-btn" type="button" aria-label="Continue with GitHub"></button>
            <button id="el-1-123" className="social-btn" type="button" aria-label="Continue with Facebook"></button>

            <div id="el-1-132" aria-hidden="true">
              <div style={{ position: 'relative', width: 24, height: 24 }}>
                <img src="/assets/figmaimages/figma_image_1_134.svg" alt="" role="presentation" width="24" height="24" style={{ position: 'absolute', left: 0, top: 0, width: '23.9996px', height: '23.9996px' }} />
                <img src="/assets/figmaimages/figma_image_1_135.svg" alt="" role="presentation" width="19" height="10" style={{ position: 'absolute', left: '1.3828px', top: 0, width: '18.7869px', height: '9.3058px' }} />
                <img src="/assets/figmaimages/figma_image_1_137.svg" alt="" role="presentation" width="12" height="11" style={{ position: 'absolute', left: '12px', top: '9.6px', width: '12px', height: '11.2968px' }} />
              </div>
            </div>

            <div id="el-1-138" aria-hidden="true">
              <div style={{ position: 'relative', width: 24, height: 24 }}>
                <img src="/assets/figmaimages/figma_image_1_140.svg" alt="" role="presentation" width="24" height="23" style={{ position: 'absolute', left: 0, top: 0, width: '24px', height: '23.4079px' }} />
              </div>
            </div>

            <div id="el-1-145" aria-hidden="true">
              <div style={{ position: 'relative', width: 24, height: 24 }}>
                <img src="/assets/figmaimages/figma_image_1_147.svg" alt="" role="presentation" width="24" height="24" style={{ position: 'absolute', left: 0, top: 0, width: '24.003px', height: '24.003px' }} />
              </div>
            </div>

            <div id="el-1-127" className="text-typo-13">Don’t have an account yet?</div>
            <a id="el-1-128" className="text-typo-15" href="#" role="link">Register for free</a>

            <div id="form-errors" className="sr-only" aria-live="polite"></div>
          </form>
        </section>

        <img
          id="el-1-109"
          src="/assets/figmaimages/figma_image_1_109.png"
          alt=""
          role="presentation"
          loading="lazy"
          width="1101"
          height="925"
          style={{ objectFit: 'cover' }}
        />

        <div id="el-1-323" role="presentation" aria-hidden="true">
          <div id="el-1-324"></div>
          <img
            id="el-1-325"
            src="/assets/figmaimages/figma_image_1_325.svg"
            alt=""
            role="presentation"
            loading="lazy"
            width="60"
            height="57"
            style={{ objectFit: 'cover' }}
          />
        </div>

        <section id="el-1-330" aria-label="Assisted students statistics">
          <div id="el-1-331" role="presentation" aria-hidden="true"></div>
          <div id="el-1-332" className="text-typo-18">250k</div>
          <div id="el-1-333" className="text-typo-19">Assisted Student</div>
          <div id="el-1-334" role="presentation" aria-hidden="true">
            <div id="el-1-335"></div>
            <div id="el-1-336">
              <img id="el-1-345" src="/assets/figmaimages/figma_image_1_345.svg" alt="" role="presentation" loading="lazy" width="63" height="57" />
            </div>
          </div>
        </section>

        <nav id="el-1-373" aria-label="Primary">
          <a id="el-1-374" className="text-typo-20" href="#">Home</a>
          <a id="el-1-375" className="text-typo-21" href="#">Careers</a>
          <a id="el-1-376" className="text-typo-21" href="#">Blog</a>
          <a id="el-1-377" className="text-typo-21" href="#">About Us</a>
          <a id="el-1-378" className="text-typo-21" href="#">Onboarding</a>
        </nav>

        <div id="el-1-379" role="presentation" aria-hidden="true">
          <div id="el-1-380" className="text-typo-22">Enroll Now</div>
        </div>

        <div id="el-1-381" aria-label="Brand">
          <div id="el-1-382" role="presentation" aria-hidden="true"></div>
          <img id="el-1-383" src="/assets/figmaimages/figma_image_1_383.png" alt="Brand mark" width="85" height="71" />
          <div id="el-1-384" role="presentation" aria-hidden="true"></div>
        </div>
      </div>
    </main>
  );
}
