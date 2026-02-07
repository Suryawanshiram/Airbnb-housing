# 🏠 Airbnb Housing - Property Rental & Booking Platform

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://airbnb-housing.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16.4-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)](https://tailwindcss.com/)

A full-stack property rental and booking platform inspired by Airbnb, built with modern web technologies. Users can list properties, search and filter accommodations, make reservations, and manage their bookings with a seamless user experience.

## 🌐 Live Demo

**URL:** [https://airbnb-housing.vercel.app/](https://airbnb-housing.vercel.app/)  
**Demo Username:** `Suryawanshiram`

---

## ✨ Features

### 🏡 Property Management
- **List Your Property** - Homeowners can list their properties with detailed information
- **Multiple Property Types** - Support for beaches, apartments, houses, and more
- **Rent or Buy Options** - Flexibility for different property transaction types
- **Property Details** - Rich property descriptions with images, amenities, and pricing

### 🔍 Advanced Search & Filtering
- **Location-based Search** - Find properties by country, city, or specific locations
- **Price Range Filters** - Set minimum and maximum price preferences
- **Guest Capacity** - Filter by number of guests
- **Property Type Filters** - Filter by beaches, apartments, houses, etc.
- **Date Availability** - Check property availability for specific dates

### 💝 User Features
- **Favorites System** - Save properties to your favorites list
- **Reservation Management** - Book properties with ease
- **Booking Cancellation** - Cancel reservations when needed
- **User Profiles** - Personalized user accounts and profiles

### 🔐 Authentication & Security
- **Protected Routes** - Secure access to user-specific features
- **Authentication Required** - Login/signup required for booking and listing
- **Session Management** - Persistent user sessions

### 🎨 UI/UX Excellence
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Modern Interface** - Clean and intuitive design with Shadcn UI components
- **Fast Performance** - Server-side rendering with Next.js for optimal speed
- **Smooth Animations** - Polished transitions and interactions

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 16.4** - React framework with server-side rendering
- **React 19.2** - UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - High-quality React components
- **JavaScript** - Core scripting language

### Backend
- **Node.js** - Runtime environment
- **Next.js API Routes** - Serverless API endpoints
- **TypeScript** - Type-safe backend code

### Development Tools
- **Code Rabbit** - Code review and analysis
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Vercel** - Deployment platform

---

## 📸 Screenshots

### Home Page
*[Screenshot placeholder: Main landing page with featured properties and search bar]*

![Home Page](./screenshots/home.png)<img width="1803" height="984" alt="Screenshot 2026-02-07 111745" src="https://github.com/user-attachments/assets/4ef122f5-dd04-4465-a720-b0da177a4d5d" />


### Property Listings
*[Screenshot placeholder: Grid view of available properties with filters]*

![Property Listings](./screenshots/listin<img width="1769" height="983" alt="Screenshot 2026-02-07 111721" src="https://github.com/user-attachments/assets/cf8f7462-219b-4913-867d-e5e87263ae8a" />
gs.png)

### Property Details
*[Screenshot placeholder: Detailed property view with images, description, and booking options]*

![Property Details](./screenshots/property-detai<img width="1769" height="<img width="789" height="957" alt="Screenshot 2026-02-07 111449" src="https://github.com/user-attachments/assets/03295c8b-b21c-4148-a61c-6818b6617058" />
983" alt="Screenshot 2026-02-07 111721" src="https://github.com/user-attachments/assets/c4422d9a-4a5b-454e-afdd-0b67f0c48558" />
ls.png)

### Advanced Filters
*[Screenshot placeholder: Filter sidebar showing location, price, guest, and property type filters]*

![Advanced Filters](./screenshots/filters.png)

### Favorites
*[Screenshot placeholder: User's saved favorite properties]*

![Favorites](./screenshots/favorites<img width="1874" height="973" alt="Screenshot 2026-02-07 111659" src="https://github.com/user-attachments/assets/db289e4b-9fae-4ae7-bc7b-f33ed090e239" />
.png)

### Reservations
*[Screenshot placeholder: User's booking history and upcoming reservations]*

![Reservations](./screenshots/reservations<img width="1874" height="973" alt="Screenshot 2026-02-07 111659" src="https://github.com/user-attachments/assets/95a1be84-aed8-44ea-b7f9-f3a732b812d2" />
.png)<img width="737" height="862" alt="Screenshot 2026-02-07 111457" src="https://github.com/user-attachments/assets/ca18ed8f-b084-477a-9f77-206d62ed099b" />


### List Property
*[Screenshot placeholder: Property listing form for homeowners]*

![List Property](./screenshots/list-property.png)

### User Authentication
*[Screenshot placeholder: Login/signup modal]*

![Authentication](./screenshots/auth<img width="695" height="881" alt="Screenshot 2026-02-07 113012" src="https://github.com/user-attachments/assets/d5993042-4fd9-433e-a492-8059f53a6af9" />
.png)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/airbnb-housing.git
   cd airbnb-housing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   DATABASE_URL=your_database_url
   
   # Authentication
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   
   # Third-party services (if applicable)
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   
   # Image hosting
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
airbnb-housing/
├── app/                      # Next.js 13+ app directory
│   ├── (routes)/            # Route groups
│   ├── api/                 # API routes
│   ├── components/          # React components
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/              # Reusable components
│   ├── ui/                  # Shadcn UI components
│   ├── modals/              # Modal components
│   ├── listings/            # Property listing components
│   └── navbar/              # Navigation components
├── lib/                     # Utility functions
│   ├── utils.ts             # Helper functions
│   └── prisma.ts            # Database client
├── hooks/                   # Custom React hooks
├── actions/                 # Server actions
├── types/                   # TypeScript type definitions
├── public/                  # Static assets
│   └── screenshots/         # Application screenshots
├── prisma/                  # Database schema
│   └── schema.prisma        # Prisma schema
├── .env.local              # Environment variables (not in repo)
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

---

## 🔑 Key Features in Detail

### Property Listing Flow

1. **Authentication Check** - User must be logged in
2. **Property Information** - Enter property details, location, amenities
3. **Image Upload** - Upload property photos
4. **Pricing Setup** - Set nightly rate or purchase price
5. **Publish** - Property goes live on the platform

### Booking Flow

1. **Browse Properties** - Use filters to find desired property
2. **View Details** - Check property information, reviews, and availability
3. **Select Dates** - Choose check-in and check-out dates
4. **Guest Count** - Specify number of guests
5. **Reserve** - Complete booking (requires authentication)
6. **Confirmation** - Receive booking confirmation

### Search & Filter System

- **Dynamic Filters** - Real-time property filtering
- **Multi-criteria Search** - Combine location, price, guests, and property type
- **URL State Management** - Shareable filter URLs
- **Instant Results** - Fast client-side filtering

---

## 🔒 Protected Routes

The following features require user authentication:

- ✅ Listing a property
- ✅ Booking a property
- ✅ Viewing favorites
- ✅ Managing reservations
- ✅ Canceling bookings
- ✅ Accessing user profile

Attempting to access these features without authentication will redirect to the login page.

---

## 🎯 Best Practices Implemented

### Code Quality
- ✅ **TypeScript** - Full type safety across the application
- ✅ **ESLint** - Enforced code quality standards
- ✅ **Code Rabbit** - Automated code reviews
- ✅ **Component-based Architecture** - Reusable and maintainable components

### Performance
- ✅ **Server Components** - Leverage Next.js 13+ server components
- ✅ **Image Optimization** - Next.js Image component for optimal loading
- ✅ **Code Splitting** - Automatic code splitting for faster loads
- ✅ **Static Generation** - Pre-render pages where possible

### Security
- ✅ **Authentication** - Secure user authentication system
- ✅ **Protected API Routes** - Server-side authentication checks
- ✅ **Environment Variables** - Sensitive data in env files
- ✅ **Input Validation** - Validate all user inputs

### UI/UX
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Accessibility** - ARIA labels and keyboard navigation
- ✅ **Loading States** - Skeleton loaders and loading indicators
- ✅ **Error Handling** - User-friendly error messages

---

## 🌟 Future Enhancements

- [ ] **Reviews & Ratings** - User reviews for properties
- [ ] **Payment Integration** - Stripe or PayPal integration
- [ ] **Real-time Chat** - Host-guest messaging system
- [ ] **Advanced Analytics** - Property performance dashboards
- [ ] **Multi-language Support** - Internationalization (i18n)
- [ ] **Map Integration** - Interactive property maps
- [ ] **Email Notifications** - Booking confirmations via email
- [ ] **Social Sharing** - Share properties on social media
- [ ] **Wishlist Collections** - Organize favorites into collections
- [ ] **Price Alerts** - Notify users of price drops

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Suryawanshiram**

- GitHub: [@Suryawanshiram](https://github.com/Suryawanshiram)
- Demo: [Airbnb Housing](https://airbnb-housing.vercel.app/)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Shadcn UI](https://ui.shadcn.com/) - Component library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Vercel](https://vercel.com/) - Deployment platform
- [Airbnb](https://www.airbnb.com/) - Design inspiration

---

## 📞 Support

If you encounter any issues or have questions, please:

- Open an issue on GitHub
- Contact: [suryawanshiram2@gmail.com]
- Visit the [live demo](https://airbnb-housing.vercel.app/)

---

<div align="center">
  <p>Made with ❤️ by Suryawanshiram</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
