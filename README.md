# Realty Works Homepage

## Live Demo: [Realty Works](https://realtyworks.vercel.app/) https://realtyworks.vercel.app/

# Project Description:

    Realty Works is a react-based Real Estate Website with responsive design. Users can browse through the listings, gallery, services, contact forms, and location of this property listing site.

    This project is a property listing site created as an assignment. Company branding/logos are retained as per assignment instructions. The company name in this repository is a placeholder and does not represent the actual company.

# Built with

    - ReactJS
    - Tailwind CSS
    - Flowbite

# Scope of Redesign

    This project focuses only on the homepage redesign of the Realty Works real estate website. Other internal pages (listings, contact, etc.) are not included in this version.

# Installation and Usage Instructions:

    1. Clone repository git clone https://github.com/yourusername/realtyworks.git cd realtyworks
        git clone https://github.com/yourusername/realtyworks.git
        cd realtyworks
        npm install
        npm run dev

    2. Install dependencies npm install

    3. Start the development server npm run dev

    4. Build for production npm run build

    5. Preview production build npx serve dist

# For Tailwind CSS 3 React+Vite Issue with Proper Installation: (credits to StackOverflow Thread for fix)

    1. Run: npm install -D tailwindcss@3 postcss autoprefixer
    2. Run: npx tailwindcss init -p
    3. Will create both tailwind.config.js and postcss.config.js
    4. Add these three in index.css file:
        @tailwind base;
        @tailwind components;
        @tailwind utilities;


    5. Update tailwind.config.js to this:
        export default {
        content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
        theme: { extend: {} },
        plugins: [require("@tailwindcss/aspect-ratio")],
        };

#To install react-scroll for smooth navigation and framer-motion for animation

1.  npm install react-scroll
2.  npm install framer-motion

    Recommended VSCode Extensions:

    - PostCSS Language Support - for Tailwind.
    - Prettier - for code formatting
    - ES7+ React/Redux/React-Native snippets - for React Shortcuts.

# Website Redesign Summary - MM Real Estate

1. Hero Section

   - Centered text and subtext for stronger visual focus - removing bottom alignment of text to avoid feeling lost
   - Retained background landscape image and parallax scrolling to retain brand image
   - added hover effect for Call Now button

2. About Section

   - Converted single-column layout into a two-column design
   - Enlarged name for emphasis and made tagline slightly smaller for visual hierarchy.
   - Added blurred company logo over black background for subtle branding.
   - added more info about the owner

3. Overview Section

   - Retained alternating image-description style
   - Images: Rounded corners and added hover shadow for a modern, elegant look for subtle interactivity.

4. Photo Gallery

   - Preserved carousel feature to maintain elegant movement and showcase
   - Changed timing to a 5-second interval for a relaxed, premium browsing pace.

5. Badges Section

   - Reduced spacing between elements (gap-5) for better visual grouping.

6. Services Section

   - Standardized all images to rounded corners for visual consistency.
   - Converted each service into an interactive card with shadows, hover scaling, and clear call-to-action buttons.
   - Polished descriptions for clarity and alignment with luxury branding.
   - Placed the cards side-by-side for easier browsing

7. Search Listings Section

   - Added placeholders and dropdown menus to guide user input.
   - Centered the section onto the image for proper background
   - added reusable FormInput and FormSelect components for fields

8. Call or Visit Section

   - Kept the 2-column layout and improved spacing and visual hierarchy
   - Moved the Send Message closer to the form and added field validation for name and email fields
   - Revamped the owner name along with the company, address and number for business card style
   - Removed the toggle button for office hours and retained open daily hours
   - Enlarged the headings and improved spacing between child elements
   - added reusable FloatingInput and FloatingTextArea for send message fields
   - added additional phone number and email

9. Maps Sections

   - Embedded google maps location of address
   - added a heading "Our Location" for clarity and it follows the Call or Visit Section

10. Social Links Section

    - Previous social links section from the site were removed. (placed before Call or Visit)
    - Retained the social links for the footer for standardizing footer
    - added toolstips and group-hover (fb, ig, linkedin and yelp)

11. NavBar

- added react-scroll for smooth navigation and anchoring

## Contact

If you'd like to get in touch, feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/maria-anne-san-andres/) or email me at mariannetamsa@gmail.com
