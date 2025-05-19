// Testimonial verileri
export const testimonials = [
    {
        quote: "Corede.AI's innovative solutions have transformed our operations, increasing efficiency and driving our growth. Their professional approach and cutting-edge technology truly set them apart.",
        author: "Bensu Kayacan",
        position: "Digital Marketing Director",
        company: "Quantum",
        image: "/img/others/avatar.avif"
    },
    {
        quote: "Since implementing Corede.AI, our data processing time has decreased by 75%. Their AI solutions identified patterns we never would have seen otherwise, giving us a significant competitive advantage.",
        author: "Mehmet Yılmaz",
        position: "CTO",
        company: "TechVision",
        image: "/img/others/avatar.avif"
    },
    {
        quote: "The team at Corede.AI goes above and beyond in customer service. They took the time to understand our unique challenges and delivered a tailored solution that exceeded our expectations.",
        author: "Zeynep Kaya",
        position: "Operations Manager",
        company: "GlobalTech",
        image: "/img/others/avatar.avif"
    }
]

export interface Testimonial {
    quote: string;
    author: string;
    position: string;
    company: string;
    image: string;
} 