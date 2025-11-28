import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="container py-5">
      <div className="hero-blur mb-4 p-4 p-lg-5">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <span className="badge bg-primary-subtle text-primary mb-3 px-3 py-2">
              Cooking Recipes App
            </span>
            <h1 className="fw-bold mb-3">
              Cook smarter, save favorites, and share your best dishes
            </h1>
            <p className="lead text-muted mb-4">
              Browse community favorites, bookmark what you love, and keep your
              own recipes organized in one place.
            </p>
            <div className="d-flex flex-wrap gap-2 hero-cta">
              <Link
                className="btn btn-primary px-3 py-2 rounded-pill border-0"
                to="/recipes"
              >
                Browse Recipes
              </Link>
              <Link
                className="btn btn-outline-primary px-3 py-2 rounded-pill border-0"
                to="/login"
              >
                Login
              </Link>
              <Link
                className="btn btn-outline-primary px-3 py-2 rounded-pill border-0"
                to="/register"
              >
                Register
              </Link>
            </div>
            <div className="d-flex flex-wrap gap-4 mt-4">
              <div>
                <div className="fw-bold h4 mb-0">Quick Search</div>
                <small className="text-muted">
                  Find recipes by keyword instantly.
                </small>
              </div>
              <div>
                <div className="fw-bold h4 mb-0">Favorites</div>
                <small className="text-muted">
                  Save and revisit what you love.
                </small>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="card-title mb-3">What you get</h5>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2">
                    ✅ Search recipes with filters and keywords
                  </li>
                  <li className="mb-2">✅ Save favorites for quick access</li>
                  <li className="mb-2">✅ Share feedback with comments</li>
                  <li className="mb-2">✅ Create and edit your own recipes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
