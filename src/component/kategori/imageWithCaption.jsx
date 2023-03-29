function ImageWithCaption({ text, url }) {
  return (
    <div
      className={` w-[140px] h-[140px] bg-cover rounded-lg`}
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <div className=" rounded-lg backdrop-brightness-50 flex flex-col justify-center w-full h-full">
        <p className="text-center text-white font-serif text-lg">{text}</p>
      </div>
    </div>
  );
}

export default ImageWithCaption;
