import { Camera, ShieldCheck, Stars, TrendingUp } from "lucide-react"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import CardDetails from "./CardDetails"

function HeroSection() {
    const FEATURE_CARDS = [
        {
            id: 'photo-reports',
            icon: <Camera />,
            title: 'Photo reports',
            description: 'Image-based capture with geo-tagging.'
        },
        {
            id: 'ai-triage',
            icon: <Stars />,
            title: 'AI triage',
            description: 'Auto category & severity scoring.'
        },
        {
            id: 'verification',
            icon: <ShieldCheck />,
            title: 'Verification',
            description: 'Neighbors confirm before action.'
        },
        {
            id: 'live-tracking',
            icon: <TrendingUp />,
            title: 'Live tracking',
            description: 'Watch issues move to resolved.'
        }
    ];
    return (
        <section id="hero-section" className="padding mt-14 flex flex-wrap gap-11 *:flex-1">
            <div>
                <Badge variant="secondary" className="bg-peach text-red-950">
                    <Stars />
                    AI-powered civic reporting
                </Badge>
                <div className="text-5xl font-bold my-4">
                    <span>Fix your neighborhood, </span>
                    <span className="text-green">together.</span>
                </div>
                <p className="text-gray-600 text-lg mb-4">
                    Snap a photo of a pothole, leak or broken streetlight. Our AI categorizes it, neighbors verify it, and the community tracks it to resolution.
                </p>
                <div className="flex gap-3 *:p-5">
                    <Button size="lg" className="bg-green">Report an issue</Button>
                    <Button size="lg" variant="outline">Browse issues</Button>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {FEATURE_CARDS.map((card) => (
                    <CardDetails key={card.id} icon={card.icon} title={card.title} desc={card.description}
                    />
                ))}
            </div>
        </section>
    )
}

export default HeroSection