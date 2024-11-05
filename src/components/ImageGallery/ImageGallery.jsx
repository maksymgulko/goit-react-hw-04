import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <ImageCard photo={item} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
