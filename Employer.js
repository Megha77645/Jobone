// Demo data for companies (extended for modal demo)
const companies = [
    {
        logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-1.png&w=64&q=75",
        name: "Udemy",
        location: "London, UK",
        category: "Design",
        jobs: 15,
        description: "",
        featured: false,
        phone: "123 456 7890",
        email: "info@udemy.com",
        industry: "Education",
        companySize: "501-1,000",
        foundation: 2010,
        website: "www.udemy.com",
        gallery: ["https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-1.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-2.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-3.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-4.png&w=256&q=75"],
        socials: { fb: "#", tw: "#", ig: "#", li: "#" },
        map: "London, UK",
        jobsList: [
            {
                title: "Software Engineer (Android) Libraries",
                company: "segment",
                location: "London, UK",
                posted: "10 hours ago",
                salary: "$35k - $45k",
                badges: ["Full Time", "Private",],
                urgent: false,
                logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-logo%2F1-1.png&w=64&q=75"
            }
             ],


    },
    {
        logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-2.png&w=64&q=75",
        name: "Stripe",
        location: "London, UK",
        category: "Accounting / Finance",
        jobs: 22,
        description: "",
        featured: false,
        phone: "123 456 7890",
        email: "info@stripe.com",
        industry: "Software",
        companySize: "501-1,000",
        foundation: 2011,
        website: "www.stripe.com",
        gallery: ["https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-1.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-2.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-3.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-4.png&w=256&q=75"],
        socials: { fb: "#", tw: "#", ig: "#", li: "#" },
        map: "London, UK",
        jobsList: [
            {
                title: "Software Engineer (Android), Libraries",
                company: "Segment",
                location: "London, UK",
                posted: "11 hours ago",
                salary: "$35k - $45k",
                badges: ["Full Time", "Private", "Urgent"],
                urgent: true,
                logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-logo%2F1-1.png&w=64&q=75"
            },
            {
                title: "Recruiting Coordinator",
                company: "Catalyst",
                location: "London, UK",
                posted: "11 hours ago",
                salary: "$35k - $45k",
                badges: ["Freelancer", "Private", "Urgent"],
                urgent: true,
                logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-logo%2F1-2.png&w=64&q=75"
            }
        ]
    },
    {
        logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-3.png&w=64&q=75",
        name: "Dropbox",
        location: "London, UK",
        category: "Accounting / Finance",
        jobs: 22,
        description: "",
        featured: false,
        phone: "123 456 7890",
        email: "info@dropbox.com",
        industry: "Software",
        companySize: "1001-5000",
        foundation: 2007,
        website: "www.dropbox.com",
        gallery: ["https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-1.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-2.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-3.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-4.png&w=256&q=75"],
        socials: { fb: "#", tw: "#", ig: "#", li: "#" },
        map: "London, UK",
        jobsList: []
    },



    {
        logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-4.png&w=64&q=75",
        name: "Figma",
        location: "California",
        category: "Design",
        jobs: 22,
        description: "",
        featured: false,
        phone: "123 456 7890",
        email: "info@dropbox.com",
        industry: "Software",
        companySize: "1001-5000",
        foundation: 2007,
        website: "www.Figma.com",
        gallery: ["https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-1.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-2.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-3.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-4.png&w=256&q=75"],
        socials: { fb: "#", tw: "#", ig: "#", li: "#" },
        map: "California",
        jobsList: [
            {
                title: "Software Engineer (Android), Libraries",
                company: "Segment",
                location: "California",
                posted: "11 hours ago",
                salary: "$35k - $45k",
                badges: ["Full Time", "Private", "Urgent"],
                urgent: true,
                logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-logo%2F1-1.png&w=64&q=75"
            },
        ]
    },


    {
        logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-5.png&w=128&q=75",
        name: "Udemy",
        location: "Paris",
        category: "Engineering",
        jobs: 22,
        description: "",
        featured: false,
        phone: "123 456 7890",
        email: "info@dropbox.com",
        industry: "Software",
        companySize: "1001-5000",
        foundation: 2007,
        website: "www.udemy.com",
        gallery: ["https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-1.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-2.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-3.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-4.png&w=256&q=75"],
        socials: { fb: "#", tw: "#", ig: "#", li: "#" },
        map: "Paris",
        jobsList: [
            {
                title: "Software Engineer (Android), Libraries",
                company: "Segment",
                location: "Paris",
                posted: "11 hours ago",
                salary: "$35k - $45k",
                badges: ["Full Time", "Private", "Urgent"],
                urgent: true,
                logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-logo%2F1-1.png&w=64&q=75"
            },
        ]
    },

    {
        logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-6.png&w=64&q=75",
        name: "Stripe",
        location: "London, UK",
        category: "Design",
        jobs: 22,
        description: "",
        featured: false,
        phone: "123 456 7890",
        email: "info@dropbox.com",
        industry: "Software",
        companySize: "1001-5000",
        foundation: 2007,
        website: "www.stripe.com",
        gallery: ["https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-1.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-2.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-3.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-4.png&w=256&q=75"],
        socials: { fb: "#", tw: "#", ig: "#", li: "#" },
        map: "London, UK",
        jobsList: [
            {
                title: "Software Engineer (Android), Libraries",
                company: "Segment",
                location: "London, UK",
                posted: "11 hours ago",
                salary: "$35k - $45k",
                badges: ["Full Time", "Private", "Urgent"],
                urgent: true,
                logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-logo%2F1-1.png&w=64&q=75"
            },
        ]
    },

    {
        logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-3.png&w=64&q=75",
        name: "Dropbox",
        location: "California",
        category: "Accounting / Finance",
        jobs: 22,
        description: "",
        featured: false,
        phone: "123 456 7890",
        email: "info@dropbox.com",
        industry: "Software",
        companySize: "1001-5000",
        foundation: 2007,
        website: "www.dropbox.com",
        gallery: ["https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-1.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-2.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-3.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-4.png&w=256&q=75"],
        socials: { fb: "#", tw: "#", ig: "#", li: "#" },
        map: "California",
        jobsList: [
            {
                title: "Software Engineer (Android), Libraries",
                company: "Segment",
                location: "California",
                posted: "11 hours ago",
                salary: "$35k - $45k",
                badges: ["Full Time", "Private", "Urgent"],
                urgent: true,
                logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-logo%2F1-1.png&w=64&q=75"
            },
        ]
    },

    {
        logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-4.png&w=64&q=75",
        name: "Figma",
        location: "London, UK",
        category: "Engineering",
        jobs: 22,
        description: "",
        featured: false,
        phone: "123 456 7890",
        email: "info@dropbox.com",
        industry: "Software",
        companySize: "1001-5000",
        foundation: 2007,
        website: "www.figma.com",
        gallery: ["https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-1.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-2.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-3.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-4.png&w=256&q=75"],
        socials: { fb: "#", tw: "#", ig: "#", li: "#" },
        map: "London, UK",
        jobsList: [
            {
                title: "Software Engineer (Android), Libraries",
                company: "Segment",
                location: "London, UK",
                posted: "11 hours ago",
                salary: "$35k - $45k",
                badges: ["Full Time", "Private", "Urgent"],
                urgent: true,
                logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-logo%2F1-1.png&w=64&q=75"
            },
        ]
    },

    {
        logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-1.png&w=64&q=75",
        name: "Udemy",
        location: "France",
        category: "Accounting / Finance",
        jobs: 22,
        description: "",
        featured: false,
        phone: "123 456 7890",
        email: "info@dropbox.com",
        industry: "Software",
        companySize: "1001-5000",
        foundation: 2007,
        website: "www.udemy.com",
       gallery: ["https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-1.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-2.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-3.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-4.png&w=256&q=75"],
        socials: { fb: "#", tw: "#", ig: "#", li: "#" },
        map: "France",
        jobsList: [
            {
                title: "Software Engineer (Android), Libraries",
                company: "Segment",
                location: "France",
                posted: "11 hours ago",
                salary: "$35k - $45k",
                badges: ["Full Time", "Private", "Urgent"],
                urgent: true,
                logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-logo%2F1-1.png&w=64&q=75"
            },
        ]
    },

    {
        logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-2.png&w=64&q=75",
        name: "Stripe",
        location: "London, UK",
        category: "Accounting / Finance",
        jobs: 22,
        description: "",
        featured: false,
        phone: "123 456 7890",
        email: "info@dropbox.com",
        industry: "Software",
        companySize: "1001-5000",
        foundation: 2007,
        website: "www.stripe.com",
        ggallery: ["https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-1.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-2.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-3.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-4.png&w=256&q=75"],
        socials: { fb: "#", tw: "#", ig: "#", li: "#" },
        map: "London, UK",
        jobsList: [
            {
                title: "Software Engineer (Android), Libraries",
                company: "Segment",
                location: "London, UK",
                posted: "11 hours ago",
                salary: "$35k - $45k",
                badges: ["Full Time", "Private", "Urgent"],
                urgent: true,
                logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-logo%2F1-1.png&w=64&q=75"
            },
        ]
    },

    {
        logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-3.png&w=64&q=75",
        name: "Dropbox",
        location: "Dubai",
        category: "Design",
        jobs: 22,
        description: "",
        featured: false,
        phone: "123 456 7890",
        email: "info@dropbox.com",
        industry: "Software",
        companySize: "1001-5000",
        foundation: 2007,
        website: "www.dropbox.com",
        gallery: ["https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-1.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-2.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-3.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-4.png&w=256&q=75"],
        socials: { fb: "#", tw: "#", ig: "#", li: "#" },
        map: "Dubai",
        jobsList: [
            {
                title: "Software Engineer (Android), Libraries",
                company: "Segment",
                location: "Dubai",
                posted: "11 hours ago",
                salary: "$35k - $45k",
                badges: ["Full Time", "Private", "Urgent"],
                urgent: true,
                logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-logo%2F1-1.png&w=64&q=75"
            },

            {
                title: "Recruiting Coordinator",
                company: "Catalyst",
                location: "Dubai",
                posted: "11 hours ago",
                salary: "$35k - $45k",
                badges: ["Freelancer", "Private", "Urgent"],
                urgent: true,
                logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-logo%2F1-2.png&w=64&q=75"
            }


        ]
    },

    {
        logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-4.png&w=64&q=75",
        name: "Figma",
        location: "London, UK",
        category: "Accounting / Finance",
        jobs: 22,
        description: "",
        featured: false,
        phone: "123 456 7890",
        email: "info@dropbox.com",
        industry: "Software",
        companySize: "1001-5000",
        foundation: 2007,
        website: "www.figma.com",
        ggallery: ["https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-1.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-2.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-3.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-4.png&w=256&q=75"],
        socials: { fb: "#", tw: "#", ig: "#", li: "#" },
        map: "London, UK",
        jobsList: [
            {
                title: "Software Engineer (Android), Libraries",
                company: "Segment",
                location: "London, UK",
                posted: "11 hours ago",
                salary: "$35k - $45k",
                badges: ["Full Time", "Private", "Urgent"],
                urgent: true,
                logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-logo%2F1-1.png&w=64&q=75"
            },

            {
                title: "Recruiting Coordinator",
                company: "Catalyst",
                location: "London, UK",
                posted: "11 hours ago",
                salary: "$35k - $45k",
                badges: ["Freelancer", "Private", "Urgent"],
                urgent: true,
                logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-logo%2F1-2.png&w=64&q=75"
            }
        ]
    },

    {
        logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-logo%2F6-1.png&w=64&q=75",
        name: "Netflix",
        location: "London, UK",
        category: "Accounting / Finance",
        jobs: 22,
        description: "",
        featured: false,
        phone: "123 456 7890",
        email: "info@dropbox.com",
        industry: "Software",
        companySize: "1001-5000",
        foundation: 2007,
        website: "www.netflix.com",
        gallery: ["https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-1.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-2.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-3.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-4.png&w=256&q=75"],
        socials: { fb: "#", tw: "#", ig: "#", li: "#" },
        map: "London, UK",
        jobsList: [
             {
                title: "Software Engineer (Android), Libraries",
                company: "Segment",
                location: "London, UK",
                posted: "11 hours ago",
                salary: "$35k - $45k",
                badges: ["Full Time", "Private", "Urgent"],
                urgent: true,
                logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-logo%2F1-1.png&w=64&q=75"
            },
        ]
    },

    {
        logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-logo%2F6-2.png&w=64&q=75",
        name: "Opendoor",
        location: "London, UK",
        category: "Accounting / Finance",
        jobs: 22,
        description: "",
        featured: false,
        phone: "123 456 7890",
        email: "info@dropbox.com",
        industry: "Software",
        companySize: "1001-5000",
        foundation: 2007,
        website: "www.Opendoor.com",
        gallery: ["https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-1.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-2.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-3.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-4.png&w=256&q=75"],
        socials: { fb: "#", tw: "#", ig: "#", li: "#" },
        map: "London, UK",
        jobsList: [
             {
                title: "Software Engineer (Android), Libraries",
                company: "Segment",
                location: "London, UK",
                posted: "11 hours ago",
                salary: "$35k - $45k",
                badges: ["Full Time", "Private", "Urgent"],
                urgent: true,
                logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-logo%2F1-1.png&w=64&q=75"
            },
        ]
    },
    {
        logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-logo%2F6-3.png&w=64&q=75",
        name: "Checkr",
        location: "London, UK",
        category: "Accounting / Finance",
        jobs: 22,
        description: "",
        featured: false,
        phone: "123 456 7890",
        email: "info@dropbox.com",
        industry: "Software",
        companySize: "1001-5000",
        foundation: 2007,
        website: "www.checkr.com",
        gallery: ["https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-1.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-2.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-3.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-4.png&w=256&q=75"],
        socials: { fb: "#", tw: "#", ig: "#", li: "#" },
        map: "London, UK",
        jobsList: [
             {
                title: "Software Engineer (Android), Libraries",
                company: "Segment",
                location: "London, UK",
                posted: "11 hours ago",
                salary: "$35k - $45k",
                badges: ["Full Time", "Private", "Urgent"],
                urgent: true,
                logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-logo%2F1-1.png&w=64&q=75"
            },
        ]
    },

    {
        logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-logo%2F6-4.png&w=64&q=75",
        name: "Mural",
        location: "London, UK",
        category: "Accounting / Finance",
        jobs: 22,
        description: "",
        featured: false,
        phone: "123 456 7890",
        email: "info@dropbox.com",
        industry: "Software",
        companySize: "1001-5000",
        foundation: 2007,
        website: "www.mural.com",
        gallery: ["https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-1.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-2.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-3.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-4.png&w=256&q=75"],
        socials: { fb: "#", tw: "#", ig: "#", li: "#" },
        map: "London, UK",
        jobsList: []
    },

    {
        logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-logo%2F6-5.png&w=64&q=75",
        name: "Astronomar",
        location: "London, UK",
        category: "Accounting / Finance",
        jobs: 22,
        description: "",
        featured: false,
        phone: "123 456 7890",
        email: "info@dropbox.com",
        industry: "Software",
        companySize: "1001-5000",
        foundation: 2007,
        website: "www.stronomar.com",
        gallery: ["https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-1.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-2.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-3.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-4.png&w=256&q=75"],
        socials: { fb: "#", tw: "#", ig: "#", li: "#" },
        map: "London, UK",
        jobsList: []
    },

    {
        logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-logo%2F6-6.png&w=64&q=75",
        name: "Figma",
        location: "London, UK",
        category: "Accounting / Finance",
        jobs: 22,
        description: "",
        featured: false,
        phone: "123 456 7890",
        email: "info@dropbox.com",
        industry: "Software",
        companySize: "1001-5000",
        foundation: 2007,
        website: "www.figma.com",
        gallery: ["https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-1.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-2.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-3.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-4.png&w=256&q=75"],
        socials: { fb: "#", tw: "#", ig: "#", li: "#" },
        map: "London, UK",
        jobsList: []
    },

    {
        logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-logo%2F6-7.png&w=64&q=75",
        name: "Mural",
        location: "London, UK",
        category: "Accounting / Finance",
        jobs: 22,
        description: "",
        featured: false,
        phone: "123 456 7890",
        email: "info@dropbox.com",
        industry: "Software",
        companySize: "1001-5000",
        foundation: 2007,
        website: "www.mural.com",
         gallery: ["https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-1.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-2.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-3.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-4.png&w=256&q=75"],
        socials: { fb: "#", tw: "#", ig: "#", li: "#" },
        map: "London, UK",
        jobsList: []
    },

    {
        logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-logo%2F6-8.png&w=64&q=75",
        name: "Invision",
        location: "London, UK",
        category: "Accounting / Finance",
        jobs: 22,
        description: "",
        featured: false,
        phone: "123 456 7890",
        email: "info@dropbox.com",
        industry: "Software",
        companySize: "1001-5000",
        foundation: 2007,
        website: "www.invision.com",
         gallery: ["https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-1.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-2.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-3.png&w=256&q=75",
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-4.png&w=256&q=75"],
        socials: { fb: "#", tw: "#", ig: "#", li: "#" },
        map: "London, UK",
        jobsList: []
    },

    
];

// Helper: create logo initials if img fails
function getInitials(name) {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
}

let bookmarks = [];
let currentFilter = {};

// Render company cards
function renderCompanies(filter = {}) {
    let filtered = companies.filter(company => {
        let keywordMatch = true, locationMatch = true, categoryMatch = true, dateMatch = true;

        // Search by keyword (name/company/desc/category)
        if (filter.keyword) {
            const kw = filter.keyword.toLowerCase();
            keywordMatch = (company.name.toLowerCase().includes(kw) ||
                company.category.toLowerCase().includes(kw) ||
                (company.description && company.description.toLowerCase().includes(kw))
            );
        }
        // Location search
        if (filter.location) {
            locationMatch = company.location.toLowerCase().includes(filter.location.toLowerCase());
        }
        // Category filter
        if (filter.category) {
            categoryMatch = company.category === filter.category;
        }
        // Foundation date filter
        if (filter.foundationStart && filter.foundationEnd) {
            dateMatch = (company.foundation >= filter.foundationStart && company.foundation <= filter.foundationEnd);
        }
        // Radius around destination (simulate: always true for demo)
        // if (filter.radius) {
        //     radiusMatch = true;
        // }
        return keywordMatch && locationMatch && categoryMatch && dateMatch ;
    });

    // Sort
    if (filter.sortBy === "name-asc") {
        filtered = filtered.slice().sort((a, b) => a.name.localeCompare(b.name));
    } else if (filter.sortBy === "jobs-desc") {
        filtered = filtered.slice().sort((a, b) => b.jobs - a.jobs);
    }

    // Category filter from toolbar
    if (filter.toolbarCategory) {
        filtered = filtered.filter(c => c.category === filter.toolbarCategory);
    }

    document.getElementById('jphd-company-list-239v').innerHTML = filtered.map((company, idx) => `
        <div class="jphd-company-card-239v" data-jphd-company-idx-239v="${idx}">
            <div class="jphd-company-info-239v">
                <div class="jphd-company-logo-239v" style="background: ${logoColor(company.name)}">
                    <img src="${company.logo}" alt="${company.name} logo"
                        onerror="this.style.display='none';this.parentNode.innerText='${getInitials(company.name)}';" />
                </div>
                <div class="jphd-company-meta-239v">
                    <span class="jphd-company-name-239v">${company.name}</span>
                    <div class="jphd-company-tags-239v">
                        <span><span class="jphd-icon-239v"><i class="fa-solid fa-location-dot"></i></span> ${company.location}</span>
                        <span><span class="jphd-icon-239v"><i class="fa-solid fa-briefcase"></i></span> ${company.category}</span>
                    </div>
                    ${company.description ? `<p class="jphd-company-description-239v">${company.description}</p>` : ''}
                </div>
            </div>
            <div class="jphd-company-actions-239v">
                ${company.featured ? `<span class="jphd-featured-239v">Featured</span>` : ''}
                <span class="jphd-open-jobs-239v">Open Jobs &mdash; ${company.jobs}</span>
            </div>
            <button class="jphd-bookmark-btn-239v${bookmarks.includes(idx) ? " active" : ""}" title="Bookmark" data-jphd-bookmark-idx-239v="${idx}" onclick="event.stopPropagation();">
                <svg viewBox="0 0 20 20"><path d="M5 3a2 2 0 0 0-2 2v13l7-4 7 4V5a2 2 0 0 0-2-2H5z"/></svg>
            </button>
        </div>
    `).join('');
    document.getElementById('jphd-job-count-239v').innerText = `${filtered.length} jobs`;

    // Card click event
    document.querySelectorAll('.jphd-company-card-239v').forEach(card => {
        card.onclick = function(e) {
            if (!e.target.closest('.jphd-bookmark-btn-239v')) {
                showModal(Number(card.getAttribute('data-jphd-company-idx-239v')));
            }
        };
    });
    // Bookmark events
    document.querySelectorAll('.jphd-bookmark-btn-239v').forEach(btn => {
        btn.onclick = function(e) {
            e.stopPropagation();
            const idx = Number(btn.getAttribute('data-jphd-bookmark-idx-239v'));
            if (bookmarks.includes(idx)) {
                bookmarks = bookmarks.filter(i => i !== idx);
            } else {
                bookmarks.push(idx);
            }
            renderCompanies(currentFilter);
        };
    });
}

// Logo color for demo
function logoColor(name) {
    const colors = ['#e57373', '#64b5f6', '#81c784', '#ffd54f', '#ba68c8', '#ff8a65', '#4dd0e1'];
    return colors[name.length % colors.length];
}

// Modal rendering
function showModal(idx) {
    const company = companies[idx];
    document.getElementById('jphd-modal-239v').classList.add('active');
    document.body.style.overflow = "hidden";
    document.getElementById('jphd-modal-content-239v').innerHTML = `
        <div class="jphd-modal-header-239v">
            <div class="jphd-modal-logo-239v">
                <img src="${company.logo}" alt="${company.name}"
                    onerror="this.style.display='none';this.parentNode.innerText='${getInitials(company.name)}';" />
            </div>
            <div class="jphd-modal-header-info-239v">
                <h2>${company.name}</h2>
                <div class="jphd-modal-header-tags-239v">
                    <span><span class="jphd-icon-239v">&#128205;</span> ${company.location}</span>
                    <span><span class="jphd-icon-239v">&#128188;</span> ${company.category}</span>
                    <span><span class="jphd-icon-239v">&#9742;</span> ${company.phone}</span>
                    <span><span class="jphd-icon-239v">&#9993;</span> ${company.email}</span>
                </div>
                <span class="jphd-open-jobs-239v">Open Jobs &mdash; ${company.jobs}</span>
            </div>
            <div class="jphd-modal-header-actions-239v">
                <button class="jphd-open-jobs-239v" >Private Message</button>
                <button class="jphd-bookmark-btn-239v${bookmarks.includes(idx) ? " active" : ""}" title="Bookmark" data-jphd-bookmark-idx-modal-239v="${idx}">
                    <svg viewBox="0 0 20 20"><path d="M5 3a2 2 0 0 0-2 2v13l7-4 7 4V5a2 2 0 0 0-2-2H5z"/></svg>
                </button>
                <button class="jphd-modal-close-btn-239v" title="Close">&times;</button>
            </div>
        </div>
        <div class="jphd-modal-body-239v">
            <div class="jphd-modal-body-content-239v">
                <div class="jphd-modal-company-title-239v">About Company</div>
                <div class="jphd-modal-company-desc-239v">
                    Simtrak Solutions is a Kolkata-based company that provides business support, team management, recruitment, training, and digital services. Founded around 2020, it focuses on helping startups and small businesses by offering services like website development, logo design, social media marketing, task tracking systems, lead generation, and customer support. They are especially known for their campus hiring programs, intern onboarding, and skill-building workshops that help young professionals grow in a real-world environment.<br><br>
                    With a small team of around 11–50 members, Simtrak Solutions promotes a learning-friendly atmosphere, especially for freshers and interns. Reviews on platforms like AmbitionBox and Glassdoor highlight strong opportunities for skill development but also mention challenges like unpaid internships and informal workflows. The company is led by professionals from diverse fields and aims to provide flexible solutions for businesses while creating a platform for young talent to learn and gain experience.
                </div>
                <div class="jphd-modal-company-gallery-239v">
                    ${company.gallery.map(img => `<img src="${img}" alt="Company photo" />`).join('')}
                </div>
                <div class="jphd-modal-jobs-title-239v">${company.jobsList.length} Others jobs available</div>
                <div class="jphd-modal-jobs-list-239v">
                    ${company.jobsList.length > 0 ? company.jobsList.map(job => `
                        <div class="jphd-modal-job-card-239v">
                            <div class="jphd-modal-job-logo-239v"><img src="${job.logo}" alt="${job.company}" onerror="this.style.display='none';this.parentNode.innerText='${getInitials(job.company)}';" /></div>
                            <div class="jphd-modal-job-meta-239v">
                                <div class="jphd-modal-job-title-239v">${job.title}</div>
                                <div class="jphd-modal-job-tags-239v">
                                    <span><span class="jphd-icon-239v">&#128188;</span> ${job.company}</span>
                                    <span><span class="jphd-icon-239v">&#128205;</span> ${job.location}</span>
                                    <span>&#8986; ${job.posted}</span>
                                    <span class="jphd-modal-job-salary-239v">${job.salary}</span>
                                </div>
                                <div class="jphd-modal-job-badges-239v">
                                    ${job.badges.map(badge => {
                                        let badgeClass = "jphd-badge-blue-239v";
                                        if (badge === "Private") badgeClass = "jphd-badge-green-239v";
                                        if (badge === "Urgent") badgeClass = "jphd-badge-yellow-239v";
                                        if (badge === "Freelancer") badgeClass = "jphd-badge-grey-239v";
                                        return `<span class="jphd-modal-job-badge-239v ${badgeClass}">${badge}</span>`;
                                    }).join('')}
                                </div>
                            </div>
                        </div>
                    `).join('') : `<em>No jobs available.</em>`}
                </div>
            </div>
            <div class="jphd-modal-body-side-239v">
                <div class="jphd-modal-company-data-239v">
                    <div><span class="jphd-data-label-239v">Primary industry:</span> <span class="jphd-data-value-239v">${company.industry}</span></div>
                    <div><span class="jphd-data-label-239v">Company size:</span> <span class="jphd-data-value-239v">${company.companySize}</span></div>
                    <div><span class="jphd-data-label-239v">Founded in:</span> <span class="jphd-data-value-239v">${company.foundation}</span></div>
                    <div><span class="jphd-data-label-239v">Phone:</span> <span class="jphd-data-value-239v">${company.phone}</span></div>
                    <div><span class="jphd-data-label-239v">Email:</span> <span class="jphd-data-value-239v">${company.email}</span></div>
                    <div><span class="jphd-data-label-239v">Location:</span> <span class="jphd-data-value-239v">${company.location}</span></div>
                    <div class="jphd-modal-company-socials-239v">
                        <a href="${company.socials.fb}" target="_blank"><span class="jphd-icon-239v">&#xf09a;</span></a>
                        <a href="${company.socials.tw}" target="_blank"><span class="jphd-icon-239v">&#xf099;</span></a>
                        <a href="${company.socials.ig}" target="_blank"><span class="jphd-icon-239v">&#xf16d;</span></a>
                        <a href="${company.socials.li}" target="_blank"><span class="jphd-icon-239v">&#xf0e1;</span></a>
                    </div>
                    <a href="https://${company.website}" class="jphd-modal-company-site-239v" target="_blank">${company.website}</a>
                </div>
                <div class="jphd-modal-company-map-239v">
                    <h4>Job Location</h4>
                    <div class="jphd-map-placeholder-239v">
                        <iframe src="https://maps.google.com/maps?q=${encodeURIComponent(company.map)}&z=12&output=embed" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Modal close
    document.querySelector('.jphd-modal-close-btn-239v').onclick = function() {
        document.getElementById('jphd-modal-239v').classList.remove('active');
        document.body.style.overflow = "";
    };
    // Modal bookmark
    document.querySelector('.jphd-modal-header-actions-239v .jphd-bookmark-btn-239v').onclick = function(e) {
        const idx = Number(this.getAttribute('data-jphd-bookmark-idx-modal-239v'));
        if (bookmarks.includes(idx)) {
            bookmarks = bookmarks.filter(i => i !== idx);
        } else {
            bookmarks.push(idx);
        }
        renderCompanies(currentFilter);
        showModal(idx);
        e.stopPropagation();
    };
    // Clicking outside modal closes
    document.getElementById('jphd-modal-239v').onclick = function(e) {
        if (e.target === this) {
            this.classList.remove('active');
            document.body.style.overflow = "";
        }
    };
}

// Form and filter logic
const form = document.getElementById('jphd-filter-form-239v');
const keywordInput = document.getElementById('jphd-keyword-239v');
const locationInput = document.getElementById('jphd-location-239v');
// const radiusInput = document.getElementById('jphd-radius-239v');
// const radiusValue = document.getElementById('jphd-radius-value-239v');
const categoryInput = document.getElementById('jphd-category-239v');
const foundationStart = document.getElementById('jphd-foundation-start-239v');
const foundationEnd = document.getElementById('jphd-foundation-end-239v');
const foundationValue = document.getElementById('jphd-foundation-value-239v');

function updateFilter(e) {
    if (e) e.preventDefault();
    let start = Math.min(Number(foundationStart.value), Number(foundationEnd.value));
    let end = Math.max(Number(foundationStart.value), Number(foundationEnd.value));
    currentFilter = {
        keyword: keywordInput.value.trim(),
        location: locationInput.value.trim(),
        category: categoryInput.value,
        sortBy: document.getElementById('jphd-sort-by-239v').value,
        toolbarCategory: document.getElementById('jphd-filter-category-239v').value,
        foundationStart: start,
        foundationEnd: end,
        // radius: Number(radiusInput.value)
    };
    renderCompanies(currentFilter);
}
form.onsubmit = updateFilter;

// Live update for range sliders
// radiusInput.oninput = () => {
//     radiusValue.textContent = `${radiusInput.value}km`;
//     updateFilter();
// };
const updateFoundation = () => {
    let start = Math.min(Number(foundationStart.value), Number(foundationEnd.value));
    let end = Math.max(Number(foundationStart.value), Number(foundationEnd.value));
    foundationValue.textContent = `${start} - ${end}`;
    updateFilter();
};
foundationStart.oninput = updateFoundation;
foundationEnd.oninput = updateFoundation;

// Toolbar sort/filter
document.getElementById('jphd-sort-by-239v').onchange = updateFilter;
document.getElementById('jphd-filter-category-239v').onchange = updateFilter;

// Initial render
window.onload = () => {
    updateFoundation();
    renderCompanies();
    // Scroll top button
    const scrollBtn = document.getElementById('jphd-scroll-top-239v');
    window.onscroll = () => {
        if (window.scrollY > 400) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    };
    scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
};

const filterToggle = document.getElementById('jphd-filter-toggle-239v');
const filterSidebar = document.querySelector('.jphd-sidebar-239v');
const filterClose = document.getElementById('jphd-filter-close-239v');

if (filterToggle && filterSidebar && filterClose) {
  filterToggle.addEventListener('click', () => {
    filterSidebar.classList.add('open');
    document.body.classList.add('jphd-filter-active-239v');
    document.body.style.overflow = 'hidden';
  });
  filterClose.addEventListener('click', () => {
    filterSidebar.classList.remove('open');
    document.body.classList.remove('jphd-filter-active-239v');
    document.body.style.overflow = '';
  });
  // Also close sidebar if user taps the overlay
  window.addEventListener('click', (e) => {
    if (
      document.body.classList.contains('jphd-filter-active-239v') &&
      e.target === document.body
    ) {
      filterSidebar.classList.remove('open');
      document.body.classList.remove('jphd-filter-active-239v');
      document.body.style.overflow = '';
    }
  });
}


