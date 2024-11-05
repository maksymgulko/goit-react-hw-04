import "./App.css";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchArticlesWithTopic } from "./imageFetch";
import { useState } from "react";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loader, setLoader] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [page, setPage] = useState(1);
  const [topic, setTopic] = useState("");

  async function fetchPhotos(newTopic) {
    setPage(1);
    setTopic(newTopic);
    setPhotos([]);
    setErrorMsg(false);
    try {
      setLoader(true);
      const data = await fetchArticlesWithTopic(newTopic);
      setPhotos(data);
    } catch (error) {
      console.log(error);
      setErrorMsg(true);
    } finally {
      setLoader(false);
    }
  }

  async function addPhotos() {
    const nextPage = page + 1;
    try {
      setLoader(true);
      const data = await fetchArticlesWithTopic(topic, nextPage);
      setPhotos((prevPhotos) => [...prevPhotos, ...data]);
      setPage(nextPage);
    } catch (error) {
      console.log(error);
      setErrorMsg(true);
    } finally {
      setLoader(false);
    }
  }

  return (
    <>
      <SearchBar onSearch={fetchPhotos} />
      {errorMsg ? <ErrorMessage /> : <ImageGallery data={photos} />}
      {loader && <Loader />}
      {photos.length > 0 && <LoadMoreBtn onAdd={addPhotos} />}
    </>
  );
}

export default App;
