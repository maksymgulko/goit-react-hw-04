import "./App.css";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageCard from "./components/ImageCard/ImageCard";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchArticlesWithTopic } from "./imageFetch";
import { useState } from "react";

function App() {
  const [photos, setPhotos] = useState([]);

  async function fetchPhotos(topic) {
    try {
      const data = await fetchArticlesWithTopic(topic);
      setPhotos(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <SearchBar onSearch={fetchPhotos} />
      <ImageGallery data={photos} />
    </>
  );
}

export default App;
