import './FeaturedIn.css'

export default function FeaturedIn() {
  return (
    <section className="featured-section">
      <div className="container">
        <p className="featured-label">Trusted by Businesses Worldwide</p>
        <div className="ratings-row">
          <div className="rating-card">
            <span className="rating-platform">Trustpilot</span>
            <span className="rating-stars">★★★★★</span>
            <span className="rating-score">4.7/5</span>
            <span className="rating-count">(5,625 reviews)</span>
          </div>
          <div className="rating-divider" />
          <div className="rating-card">
            <span className="rating-platform">Google Reviews</span>
            <span className="rating-stars">★★★★★</span>
            <span className="rating-score">4.4/5</span>
            <span className="rating-count">(3,704 reviews)</span>
          </div>
        </div>
      </div>
    </section>
  )
}
