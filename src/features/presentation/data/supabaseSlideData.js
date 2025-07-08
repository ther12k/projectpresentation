export const supabaseSlideData = {
  title: "Accelerating Development with Self-Hosted Supabase",
  architecture: {
    title: "Core Architecture on Your Infrastructure",
    description: "Supabase bundles open-source tools under a single, cohesive interface. When self-hosted, all these components run on your own servers, giving you complete control.",
    components: [
      { name: "PostgreSQL Database", description: "The heart of Supabase, providing a robust and scalable SQL database." },
      { name: "Studio Dashboard", description: "A user-friendly UI for managing your database, authentication, and other services." },
      { name: "GoTrue (Auth)", description: "Manages user authentication and authorization, supporting various providers." },
      { name: "PostgREST (API)", description: "Generates a RESTful API directly from your PostgreSQL schema." },
      { name: "Realtime Engine", description: "Enables real-time data synchronization between clients and the database." },
      { name: "Storage", description: "Handles large file storage, like images and videos, with permission management." },
      { name: "Kong API Gateway", description: "Manages all incoming API requests, providing a unified entry point." }
    ]
  },
  benefits: {
    title: "Key Benefits of Self-Hosting",
    items: [
      { name: "Full Data Ownership", description: "Your data stays within your network, ensuring compliance and privacy.", icon: "Database" },
      { name: "No Vendor Lock-in", description: "Migrate away or modify the stack anytime. You own the code and the infrastructure.", icon: "Unlock" },
      { name: "Cost-Effective Scaling", description: "Pay only for your server resources, not per user or per API call.", icon: "DollarSign" },
      { name: "Deep Customization", description: "Modify any part of the stack, add custom extensions, or integrate with internal services.", icon: "Settings" },
      { name: "Enhanced Security", description: "Implement your own security protocols and run Supabase in a VPC.", icon: "Shield" },
      { name: "Offline Capabilities", description: "Run your entire backend locally or on-premises without internet access.", icon: "WifiOff" }
    ]
  }
};