import React from 'react'
import { useState } from "react";

function ImageUpload() {

  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
     
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        multiple={false}
      />
      {image && (
        <div>
          <h3>Preview</h3>
          <img src={image} alt="Preview" style={{ maxWidth: "100%" }} />
        </div>
      )}
    </div>
  );
}

export default ImageUpload