import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const ProductDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="root">
      <div className="product-wrapper">
        <div>Product details</div>
        <div>
          <button
            className="settings-btn"
            onClick={() => navigate(`/projects/${id}/settings`)}
          >
            Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
