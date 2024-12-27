import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us container">
      <div className="text-center">
        <h2 className="mb-4">Purrfect Adoption</h2>
        <div className="card p-4">
          {/* Mission Section */}
          <section className="mb-4">
            <h3>Our Mission</h3>
            <p>
              To ensure a safe home for all the stray cats.
            </p>
          </section>

          {/* History Section */}
          <section className="mb-4">
            <h3>Our History</h3>
            <p>
              We started our journey at 2010 in Dhaka,Bangladesh.
            </p>
          </section>

          {/* Team Section */}
          <section>
            <h3>Our Team</h3>
            <div className="d-flex justify-content-center gap-3">
              {/* Team Member 1 */}
              <div className="card text-center" style={{ width: '150px' }}>
                <img
                  src="https://www.americamagazine.org/sites/default/files/main_image/schneider_0.jpg"
                  alt="Bob Doe"
                  className="card-img-top"
                />
                <div className="card-body">
                  <p className="card-text">Tom Doe</p>
                  <p className="card-subtitle text-muted">CFO</p>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="card text-center" style={{ width: '150px' }}>
                <img
                  src="https://www.americamagazine.org/sites/default/files/main_image/schneider_0.jpg"
                  alt="Bob Doe"
                  className="card-img-top"
                />
                <div className="card-body">
                  <p className="card-text">Bob Doe</p>
                  <p className="card-subtitle text-muted">Director</p>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="card text-center" style={{ width: '150px' }}>
                <img
                  src="https://www.americamagazine.org/sites/default/files/main_image/schneider_0.jpg"
                  alt="Bob Doe"
                  className="card-img-top"
                />
                <div className="card-body">
                  <p className="card-text">John Doe</p>
                  <p className="card-subtitle text-muted">CEO</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <p className="text-muted mt-4"></p>
      </div>
    </div>
  );
};

export default AboutUs;
