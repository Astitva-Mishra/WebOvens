import './Marquee.css'

export default function Marquee() {
    const items = [
        'WEBSITES', 'MOBILE APPS', 'GROWTH', 'ENTERPRISE ERP',
        'UI/UX DESIGN', 'SEO', 'REACT', 'NEXT.JS', 'NODE.JS',
        'WEBOVENS'
    ]
    const track = [...items, ...items] // double for seamless loop

    return (
        <section className="marquee-section" aria-hidden="true">
            <div className="marquee-track">
                {track.map((item, i) => (
                    <span key={i} className="marquee-item">
                        {item} <span className="marquee-dot">◆</span>
                    </span>
                ))}
            </div>
        </section>
    )
}
