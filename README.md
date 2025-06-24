# De Gouden Korst 🍞

A simple, functional website for the fictional bakery **De Gouden Korst**, built with HTML, CSS, JavaScript, and enhanced via AI development tools. Hosted live on Vercel.

---

## 🔍 Project Description

**De Gouden Korst** is a lightweight, responsive bakery site that showcases products, provides a contact form, and employs mobile-first design principles. Key features include:

* **Assortment listing** with neat product cards
* **Contact form** with client-side validation
* **Responsive layout** optimized for mobile-first viewing
* **AI‑guided code practices** using Cursor AI and enforced web-standards rules

---

## ⚙️ Technologies Used

* **HTML5** – semantic markup
* **CSS3** – mobile-first styling
* **JavaScript (ES6+)** – interactive form handling
* **Cursor AI** – AI-assisted development
* **Vercel** – deployment & hosting

---

## 🚀 Live Demo

Check out the live site here:
[](https://de-gouden-korst-three.vercel.app))

---

## 📁 Project Structure

```
src/
├── index.html          # Home page
├── assortiment.html    # Product list
├── contact.html        # Contact form
├── styles.css          # Global styles
├── script.js           # Form validation & interactivity
├── .cursor/
│   └── rules/web-standards.mdc   # AI development style rules
└── vercel.json         # Vercel routing configuration
```

---

## 🛠️ Installation (Local Setup)

To run locally:

```bash
git clone https://github.com/Jasper-van-Tilborg/De-Gouden-Korst.git
cd De-Gouden-Korst
# Open src/index.html in your browser, or install a live-server:
npx live-server src
```

---

## 🧑‍💻 Usage Examples

1. Browse to **index.html** to view the homepage.
2. Visit **assortiment.html** to see product listings.
3. On **contact.html**, fill out the form; try leaving required fields blank to see validation in action.
4. The JavaScript ensures all fields are completed before allowing “Submit.”

---

## 🤝 Contribution Guidelines

Contributions are welcome! To contribute:

1. Fork the repo
2. Create a new branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push: `git push origin feature/YourFeature`
5. Open a pull request describing your changes and why they help

Please adhere to existing styling, follow Cursor AI rules, and ensure accessibility and responsive design.

---

## 🛡️ License

This project is released under the **MIT License**. See [LICENSE](https://github.com/DoaaAltair/De-Gouden-Korst/blob/main/LICENSE) for full details.
---

## ❓ FAQ / Troubleshooting

| Problem                         | Solution                                                                 |
| ------------------------------- | ------------------------------------------------------------------------ |
| Website shows 404 on deployment | Check that `vercel.json` sets `"src/"` as root and rebuild the site      |
| Styles don't apply              | Confirm `styles.css` is correctly linked in all HTML files               |
| Contact form not submitting     | Ensure browser JS is enabled; `script.js` handles form validation        |
| AI prompts not applied          | Make sure `.cursor/rules/web-standards.mdc` is present before code edits |

---

## 🧾 Changelog

**v1.0** (initial release)

* Added homepage, products page, and contact form
* Implemented CSS and JS for responsive design and validation
* Integrated Cursor AI rules for consistent development
* Hosted on Vercel with proper routing settings

---

## 📌 Notes for Maintainers

* Keep README updated with new pages or features
* Add version tags or releases as the project evolves
* Include screenshots or GIFs to enhance visual appeal

---
