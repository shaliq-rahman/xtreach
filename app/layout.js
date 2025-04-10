import "/public/assets/css/bootstrap.min.css"
import "/public/assets/css/all.min.css"
import "/public/assets/css/magnific-popup.css"
import "/public/assets/css/nice-select.css"
import "/public/assets/css/swiper.min.css"
import "/public/assets/css/aos.css"
import "/public/assets/css/main.css"
import { Manrope, Plus_Jakarta_Sans } from 'next/font/google'

const manrope = Manrope({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--manrope",
    display: 'swap',
})
const jakarta = Plus_Jakarta_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--jakarta",
    display: 'swap',
})
export const metadata = {
    title: 'Xtreach - Website Designing, Mobile App Development Company in Calicut, Kerala ',
    description: 'Xtreach is a creative software company in Calicut, Kerala specializing in website designing, mobile app development, and UI/UX design. We build stunning digital solutions that elevate your brand.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${manrope.variable} ${jakarta.variable} position-relative bg2-clr`}>{children}</body>
        </html>
    )
}
