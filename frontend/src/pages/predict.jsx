import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../layout/Header';
import Navs from '../components/Navs';
import Button from '../components/Button';

const importAll = (r) => r.keys().map(r);

const imageFolders = {
  Kunyit: require.context('../assets/kunyit', false, /\.(png|jpe?g|svg)$/),
  Kencur: require.context('../assets/kencur', false, /\.(png|jpe?g|svg)$/),
  Temulawak: require.context('../assets/temulawak', false, /\.(png|jpe?g|svg)$/),
  Lengkuas: require.context('../assets/lengkuas', false, /\.(png|jpe?g|svg)$/)
};

function Predict() {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState('');
  const [description, setDescription] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [relatedImages, setRelatedImages] = useState([]);
  const [detail, setDetail] = useState([]);  
  const [confidence, setConfidence] = useState('');


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!image) {
      alert('Gambar belum diupload!');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    try {
      const res = await axios.post('http://127.0.0.1:5000/predict', formData);
      setPrediction(res.data.prediction);
      setDescription(res.data.description);
      setConfidence((res.data.confidence * 100).toFixed(2));

      if (res.data.detail && typeof res.data.detail === 'object') {
        const detailArr = Object.entries(res.data.detail).map(
          ([key, value]) => `${key}: ${value}`
        );
        setDetail(detailArr);
      } else if (Array.isArray(res.data.detail)) {
        setDetail(res.data.detail);
      } else {
        setDetail([String(res.data.detail)]);
      }

    } catch (err) {
      console.error(err);
    }
  };

  const handleReset = () => {
  setImage(null);
  setPrediction('');
  setDescription('');
  setImagePreview(null);
  setRelatedImages([]);
  setDetail([]);
};


  useEffect(() => {
    if (prediction && imageFolders[prediction]) {
      const images = importAll(imageFolders[prediction]);
      setRelatedImages(images);
    } else {
      setRelatedImages([]);
    }
  }, [prediction]);

  return (
    <>
    {/* Sticky Wrapper untuk Nav + Header */}
<div className="sticky top-0 z-50 w-full backdrop-blur-md ">
  <div className="mx-auto max-w-[100rem]">
    <Navs />
    <Header />
  </div>
</div>

     

      <div className="container mx-auto max-w-5xl px-4 py-20 text-center bg-whitemilk/40 shadow-md rounded-lg mt-5 mb-10 ">
        <h1 className="text-3xl font-bold text-greenDark mb-6">Deteksi Empon-Empon</h1>

        <div className="mb-4 flex justify-center">
          <input 
            type="file" 
            onChange={handleImageChange}
            className="block w-full flex justify-center text-sm text-greenDark file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
          />
        </div>

        {imagePreview && (
          <div className="mb-6">
            <h3 className="text-md font-medium mb-2">Gambar yang diunggah:</h3>
            <img 
              src={imagePreview} 
              alt="Preview" 
              className="mx-auto max-w-xs rounded-lg border-2 border-greenDark transform transition duration-300 hover:scale-105 hover:shadow-lg"
            />
          </div>
        )}

        <div className="flex justify-center mt-10 gap-4">
          <Button 
            variant='green'
            onClick={handleSubmit} 
            label={"Deteksi"}
          />
          
        </div>
          
            
         


        {prediction && (
          <div className="mt-6 text-left">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Hasil Deteksi: <span className="text-greenDark">{prediction}</span>
            </h2>
           {confidence && (
      <p className="text-gray-900 mb-2">
        Keyakinan Model: {confidence}%
      </p>
    )}
            <p className="text-gray-900 bg-white p-4 rounded-lg shadow-lg">{description}</p>

            <div className="flex flex-wrap gap-2 mt-4 justify-between">
              {detail.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-greenDark text-white px-4 py-2 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}

        {relatedImages.length > 0 && (
          <div className="mt-6 text-left">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Gambar Relevan 
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {relatedImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${prediction} ${index + 1}`}
                  className="rounded-lg border shadow-sm transform transition duration-300 hover:scale-105 hover:shadow-lg"
                />
              ))}
              
            </div>
             <div className="flex justify-center mt-10 gap-4">
          
          <Button 
            variant="oren"
            onClick={handleReset}
            label={"Prediksi Kembali"}
          />
        </div>
          </div>
          
        )}
      </div>
    </>
  );
}

export default Predict;